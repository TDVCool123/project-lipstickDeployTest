import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";

const tableName = 'producto';

export const getProducts = async () => {
    const supabase = createServerComponentClient({cookies})

    const {data}  = await supabase.from(tableName).select('*');
    // console.log("🚀 ~ file: productsService.js:9 ~ getProducts ~ data:", data)
    return data;
}

export const getProductById = async (id) => {
    const supabase = createServerComponentClient({cookies})

    const {data}  = await supabase.from(tableName).select('*').eq('id',id);
    
    return data[0];
}






export const getCompraById = async (idCompra) => {
    const supabase = createServerComponentClient({cookies})

    const {data}  = await supabase.from(tableCompra).select('*').eq('id',idCompra);
    
    return data[0];
}

export const getProductoCompradoById = async (id) => {
    const supabase = createServerComponentClient({cookies})

    const {data}  = await supabase.from(tableProductoComprado).select('nombreLargo, precio, producto_comprado (cantidad)');
    
    return data;
}

export const getCompras = async () =>{
    const supabase = createServerComponentClient({cookies})
    const {data: {user}} = await supabase.auth.getUser();
    let { data: compra, error } = await supabase.from(tableCompra).select('id, total_price'); 
    
    

    const productos = compra.map((compra) => {
        const productos = getProductoCompradoById(compra.id);
        const paquete = {
            compras: compra,
            productos: productos,
            compraId:compra.id,
            total:compra.total_price
            }
        return paquete
    })
    return productos;
   
}