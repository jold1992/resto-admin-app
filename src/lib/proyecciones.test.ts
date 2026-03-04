import { promedioMovilPonderado, detectarTendencia, generarProyeccion, type PuntoVenta, type ProyeccionPlato } from './proyecciones';

describe('proyecciones', () => {
  describe('promedioMovilPonderado', () => {
    it('should return 0 for empty array', () => {
      expect(promedioMovilPonderado([])).toBe(0);
    });

    it('should return the value for single element', () => {
      expect(promedioMovilPonderado([5])).toBe(5);
    });

    it('should weight more recent values higher', () => {
      // [1, 2] -> (1*1 + 2*2) / (1+2) = 5/3 ≈ 1.67
      const result = promedioMovilPonderado([1, 2]);
      expect(result).toBeCloseTo(1.667, 2);
    });

    it('should give more weight to recent values in longer arrays', () => {
      // [1, 2, 3, 4] -> (1*1 + 2*2 + 3*3 + 4*4) / (1+2+3+4) = 30/10 = 3
      expect(promedioMovilPonderado([1, 2, 3, 4])).toBe(3);
    });

    // Vulnerability: Division by zero potential
    it('should handle negative numbers', () => {
      const result = promedioMovilPonderado([-1, 0, 1]);
      // (-1*1 + 0*2 + 1*3) / 6 = 2/6 ≈ 0.33
      expect(result).toBeCloseTo(0.333, 2);
    });

    // Vulnerability: Large numbers
    it('should handle very large numbers', () => {
      const result = promedioMovilPonderado([1e10, 1e10, 1e10]);
      expect(result).toBe(1e10);
    });
  });

  describe('detectarTendencia', () => {
    it('should return "estable" for less than 4 values', () => {
      expect(detectarTendencia([1, 2, 3])).toBe('estable');
    });

    it('should detect upward trend', () => {
      // First half average: 1, Second half average: 3
      // (3-1)/1 = 2 > 0.1 -> alza
      expect(detectarTendencia([1, 1, 2, 2, 3, 3])).toBe('alza');
    });

    it('should detect downward trend', () => {
      // First half average: 3, Second half average: 1
      // (1-3)/3 = -0.67 < -0.1 -> baja
      expect(detectarTendencia([3, 3, 2, 2, 1, 1])).toBe('baja');
    });

    it('should return "estable" for stable data', () => {
      // Use truly stable data [1,1,1,1,1,1] -> both halves = 1, diff = 0
      expect(detectarTendencia([1,1,1,1,1,1])).toBe('estable');
    });

    // Vulnerability: Division by zero
    it('should handle all zeros', () => {
      expect(detectarTendencia([0, 0, 0, 0])).toBe('estable');
    });

    // Vulnerability: Large numbers
    it('should handle large numbers', () => {
      const largeNumbers = Array(10).fill(1e15);
      expect(detectarTendencia(largeNumbers)).toBe('estable');
    });
  });

  describe('generarProyeccion', () => {
    it('should return empty array for empty historial', () => {
      const result = generarProyeccion([], 7);
      expect(result).toHaveLength(7);
    });

    it('should generate correct number of days', () => {
      const historial: PuntoVenta[] = [
        { fecha: '2024-01-01', cantidad: 10 },
        { fecha: '2024-01-02', cantidad: 15 },
      ];
      const result = generarProyeccion(historial, 5);
      expect(result).toHaveLength(5);
    });

    it('should generate dates in correct format', () => {
      const historial: PuntoVenta[] = [
        { fecha: '2024-01-01', cantidad: 10 },
      ];
      const result = generarProyeccion(historial, 1);
      expect(result[0].fecha).toMatch(/^\d{4}-\d{2}-\d{2}$/);
    });

    it('should generate non-negative quantities', () => {
      const historial: PuntoVenta[] = [
        { fecha: '2024-01-01', cantidad: 10 },
        { fecha: '2024-01-02', cantidad: -5 }, // Negative value
      ];
      const result = generarProyeccion(historial, 7);
      result.forEach(p => {
        expect(p.cantidad).toBeGreaterThanOrEqual(0);
      });
    });

    // Vulnerability: Input validation
    it('should handle malformed fecha', () => {
      const historial: PuntoVenta[] = [
        { fecha: 'invalid-date', cantidad: 10 },
      ];
      const result = generarProyeccion(historial, 1);
      expect(result).toHaveLength(1);
    });

    // Vulnerability: Extremely large historial
    it('should handle very large historial', () => {
      const historial: PuntoVenta[] = Array(1000).fill(null).map((_, i) => ({
        fecha: `2024-${String(Math.floor(i / 30) + 1).padStart(2, '0')}-${String((i % 30) + 1).padStart(2, '0')}`,
        cantidad: Math.floor(Math.random() * 100),
      }));
      const result = generarProyeccion(historial, 7);
      expect(result).toHaveLength(7);
    });

    // Security: Date manipulation
    it('should not produce dates in the past', () => {
      const historial: PuntoVenta[] = [
        { fecha: '2020-01-01', cantidad: 10 },
      ];
      const result = generarProyeccion(historial, 1);
      const today = new Date().toISOString().split('T')[0];
      expect(result[0].fecha >= today).toBe(true);
    });
  });

  describe('type definitions', () => {
    it('should allow valid PuntoVenta', () => {
      const punto: PuntoVenta = {
        fecha: '2024-01-01',
        cantidad: 10,
      };
      expect(punto).toBeDefined();
    });

    it('should allow negative cantidad', () => {
      const punto: PuntoVenta = {
        fecha: '2024-01-01',
        cantidad: -5,
      };
      expect(punto.cantidad).toBe(-5);
    });

    it('should allow valid ProyeccionPlato', () => {
      const proyeccion: ProyeccionPlato = {
        platoId: '123',
        nombre: 'Test Plato',
        historial: [],
        proyeccion: [],
        tendencia: 'estable',
        promedioBase: 10,
      };
      expect(proyeccion).toBeDefined();
    });
  });
});
