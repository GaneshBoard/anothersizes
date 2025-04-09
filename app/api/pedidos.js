import { supabase } from "@/lib/supabase";

export default async function handler(req, res) {
    if (req.method === "POST") {
        const { nombre, email, productos, total } = req.body;

        // Guardar pedido en la base de datos
        const { data, error } = await supabase
            .from("pedidos")
            .insert([{ nombre, email, productos, total }]);

        if (error) return res.status(500).json({ error: error.message });

        res.status(200).json({ mensaje: "Pedido guardado", data });
    } else {
        res.status(405).json({ mensaje: "Método no permitido" });
    }
}
