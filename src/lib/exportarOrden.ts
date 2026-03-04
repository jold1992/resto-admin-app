import jsPDF from "jspdf";
import type { OrdenCompra } from "@/hooks/useCompras";
import { getUnidadAbrev } from "@/lib/unidades";
import type { UnidadMedida } from "@/lib/unidades";
import { format } from "date-fns";
import { es } from "date-fns/locale";

export function exportarOrdenPDF(orden: OrdenCompra) {
  const doc = new jsPDF();
  const pageWidth = doc.internal.pageSize.getWidth();
  let y = 20;

  // Header
  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.text("Orden de Compra", 20, y);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(120, 120, 120);
  doc.text(`#${orden.id.slice(-8).toUpperCase()}`, pageWidth - 20, y, { align: "right" });

  y += 8;
  doc.text(
    format(new Date(orden.createdAt), "dd 'de' MMMM yyyy, HH:mm", { locale: es }),
    pageWidth - 20, y, { align: "right" }
  );

  y += 6;
  doc.text(`Estado: ${orden.estado}`, pageWidth - 20, y, { align: "right" });

  // Línea separadora
  y += 8;
  doc.setDrawColor(220, 220, 220);
  doc.line(20, y, pageWidth - 20, y);
  y += 10;

  // Tabla header
  doc.setTextColor(0, 0, 0);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.text("Ingrediente", 20, y);
  doc.text("Cant. Sugerida", 100, y, { align: "right" });
  doc.text("Cant. Final", 145, y, { align: "right" });
  doc.text("Unidad", pageWidth - 20, y, { align: "right" });

  y += 2;
  doc.setDrawColor(200, 200, 200);
  doc.line(20, y, pageWidth - 20, y);
  y += 7;

  // Filas
  doc.setFont("helvetica", "normal");
  doc.setFontSize(10);

  orden.detalles.forEach((d, i) => {
    if (y > 270) {
      doc.addPage();
      y = 20;
    }

    const abrev = getUnidadAbrev(d.ingrediente.unidad as UnidadMedida);

    if (i % 2 === 0) {
      doc.setFillColor(248, 248, 248);
      doc.rect(20, y - 5, pageWidth - 40, 8, "F");
    }

    doc.setTextColor(0, 0, 0);
    doc.text(d.ingrediente.nombre, 22, y);
    doc.text(Number(d.cantidadSugerida).toFixed(3), 100, y, { align: "right" });
    doc.text(
      d.cantidadFinal != null ? Number(d.cantidadFinal).toFixed(3) : "—",
      145, y, { align: "right" }
    );
    doc.text(abrev, pageWidth - 20, y, { align: "right" });
    y += 9;
  });

  // Línea final
  doc.setDrawColor(200, 200, 200);
  doc.line(20, y, pageWidth - 20, y);
  y += 8;

  // Total ítems
  doc.setFont("helvetica", "bold");
  doc.setFontSize(10);
  doc.setTextColor(80, 80, 80);
  doc.text(`Total de ítems: ${orden.detalles.length}`, 20, y);

  // Footer
  const pageHeight = doc.internal.pageSize.getHeight();
  doc.setFont("helvetica", "normal");
  doc.setFontSize(8);
  doc.setTextColor(160, 160, 160);
  doc.text("Generado por Sistema de Administración de Restaurante", pageWidth / 2, pageHeight - 10, { align: "center" });

  doc.save(`orden-compra-${orden.id.slice(-8).toUpperCase()}.pdf`);
}