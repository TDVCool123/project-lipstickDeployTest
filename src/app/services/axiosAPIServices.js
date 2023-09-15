import { bodoniAPI } from "./axiosAPI";

export const getProducts = async () =>{
    const productos = await bodoniAPI.get('/products');
    return productos.data;
}

export const getProductById = async (id) =>{
    const producto = await bodoniAPI.get(`/products/${id}`);
    return producto.data;
}

export const getUser = async () => {
    const user = await bodoniAPI.get('/user');
    return user.data;
}

export const updateUser = async (newData) => {
    const user = await bodoniAPI.put('/user', newData);
    return user.data
}

export const createCompra = async (compra) =>{
    const response = await bodoniAPI.post(`/compra`,compra);
    return response.data;
}







export const getCompra = async () =>{
    const compra = await bodoniAPI.get(`/compra`);
    return compra.data;
}

export const getCompraById = async (idCompra) =>{
    const compra = await bodoniAPI.get(`/compra/${idCompra}`);
    return compra.data;
}

export const getProductoCompradoById = async (id) =>{
    const productoComprado = await bodoniAPI.get(`/producto_comprado/${id}`);
    return productoComprado.data;
}