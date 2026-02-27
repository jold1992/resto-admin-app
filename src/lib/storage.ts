import { createClient } from "@/lib/supabase/client";

export async function uploadPlatoImage(file: File, platoId: string): Promise<string> {
    const supabase = createClient();
    const ext = file.name.split(".").pop();
    const path = `${platoId}.${ext}`;

    const { error } = await supabase.storage
        .from("platos")
        .upload(path, file, { upsert: true });

    if (error) throw new Error(error.message);

    const { data } = supabase.storage.from("platos").getPublicUrl(path);
    return data.publicUrl;
}

export async function deletePlatoImage(imageUrl: string) {
    const supabase = createClient();
    const path = imageUrl.split("/platos/")[1];
    if (!path) return;
    await supabase.storage.from("platos").remove([path]);
}