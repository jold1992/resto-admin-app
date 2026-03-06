const DATE_REGEX = /^\d{4}-\d{2}-\d{2}$/;
const MAX_CANTIDAD = 100_000;
const MAX_HISTORIAL = 1_000;

export function validarPuntoVenta(p: { fecha: string; cantidad: number }): boolean {
  if (!DATE_REGEX.test(p.fecha)) return false;
  const d = new Date(p.fecha);
  if (isNaN(d.getTime())) return false;
  if (p.cantidad < 0 || p.cantidad > MAX_CANTIDAD) return false;
  return true;
}

export type PuntoVenta = { fecha: string; cantidad: number };
export type ProyeccionPlato = {
  platoId: string;
  nombre: string;
  historial: PuntoVenta[];
  proyeccion: PuntoVenta[];
  tendencia: "alza" | "baja" | "estable";
  promedioBase: number;
};

/**
 * Promedio móvil ponderado — los días más recientes pesan más.
 * weights[0] = día más antiguo, weights[n-1] = día más reciente
 */
export function promedioMovilPonderado(valores: number[]): number {
  if (valores.length === 0) return 0;
  const n = valores.length;
  let sumaPesos = 0;
  let sumaValores = 0;
  valores.forEach((v, i) => {
    const peso = i + 1; // peso crece linealmente
    sumaPesos += peso;
    sumaValores += v * peso;
  });
  return sumaValores / sumaPesos;
}

/**
 * Detecta tendencia comparando la primera y segunda mitad del historial.
 */
export function detectarTendencia(valores: number[]): "alza" | "baja" | "estable" {
  if (valores.length < 4) return "estable";
  const mitad = Math.floor(valores.length / 2);
  const primera = valores.slice(0, mitad).reduce((a, b) => a + b, 0) / mitad;
  const segunda = valores.slice(mitad).reduce((a, b) => a + b, 0) / (valores.length - mitad);
  const diff = (segunda - primera) / (primera || 1);
  if (diff > 0.1) return "alza";
  if (diff < -0.1) return "baja";
  return "estable";
}

/**
 * Genera proyección para los próximos N días a partir del historial.
 */
export function generarProyeccion(
  historial: PuntoVenta[],
  diasFuturos: number = 7,
  ventanaHistorial: number = 30
): PuntoVenta[] {
  // Sanitize inputs
  const safeDias = Math.min(Math.max(0, Math.floor(diasFuturos)), 365);
  const safeVentana = Math.min(Math.max(1, Math.floor(ventanaHistorial)), MAX_HISTORIAL);
  const safeHistorial = historial.slice(0, MAX_HISTORIAL).filter(validarPuntoVenta);

  // Tomar los últimos N días del historial
  const reciente = safeHistorial.slice(-safeVentana);
  const valores = reciente.map(p => p.cantidad);
  const base = promedioMovilPonderado(valores);

  const proyeccion: PuntoVenta[] = [];
  const hoy = new Date();

  for (let i = 1; i <= safeDias; i++) {
    const fecha = new Date(hoy);
    fecha.setDate(hoy.getDate() + i);

    // Ajuste por día de semana (factor simple basado en historial)
    const diaSemana = fecha.getDay();
    const valoresMismoDia = reciente
      .filter(p => new Date(p.fecha).getDay() === diaSemana)
      .map(p => p.cantidad);

    const factorDia = valoresMismoDia.length > 0
      ? promedioMovilPonderado(valoresMismoDia) / (base || 1)
      : 1;

    proyeccion.push({
      fecha: fecha.toISOString().split("T")[0],
      cantidad: Math.max(0, Math.round(base * factorDia * 10) / 10),
    });
  }

  return proyeccion;
}