import { createClient } from "@/lib/supabase/client";

export async function uploadPlatoImage(file: File, platoId: string): Promise<string> {
  const supabase = createClient();

  // Convertir a WebP via canvas (client-side, sin Sharp)
  const webpBlob = await convertToWebP(file);
  const path = `${platoId}.webp`;

  const { error } = await supabase.storage
    .from("platos")
    .upload(path, webpBlob, {
      upsert: true,
      contentType: "image/webp",
    });

  if (error) throw new Error(error.message);

  const { data } = supabase.storage.from("platos").getPublicUrl(path);
  return data.publicUrl;
}

async function convertToWebP(file: File): Promise<Blob> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    const url = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");

      // Redimensionar si es muy grande (máx 800px de ancho)
      const maxWidth = 800;
      const scale = img.width > maxWidth ? maxWidth / img.width : 1;
      canvas.width = img.width * scale;
      canvas.height = img.height * scale;

      const ctx = canvas.getContext("2d");
      if (!ctx) return reject(new Error("Canvas no disponible"));

      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      canvas.toBlob(
        (blob) => {
          URL.revokeObjectURL(url);
          if (blob) resolve(blob);
          else reject(new Error("Error al convertir imagen"));
        },
        "image/webp",
        0.85 // calidad 85% — buen balance tamaño/calidad
      );
    };

    img.onerror = () => reject(new Error("Error al cargar imagen"));
    img.src = url;
  });
}

export async function deletePlatoImage(imageUrl: string) {
  const supabase = createClient();
  const path = imageUrl.split("/platos/")[1];
  if (!path) return;
  await supabase.storage.from("platos").remove([path]);
}