import { API_HEADER, API_URL } from "@/static";
import { Producto } from "@/types/models/producto";
import { ApiRespone } from "@/types/responses";
import axios from "axios";
import { toast } from "react-toastify";

const getproductos = async (): Promise<Producto[]> => {
  try {
    const response = await axios.get<ApiRespone>(`${API_URL}/productos`, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return [];
    }
    return response.data.data as Producto[];
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return [];
  }
}

const getProducto = async (id: string): Promise<Producto> => {
  try {
    const response = await axios.get<ApiRespone>(`${API_URL}/productos/${id}`, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Producto;
    }
    return response.data.data as Producto;
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return {} as Producto;
  }
}

const createProducto = async (Producto: Producto): Promise<Producto> => {
  try {
    const response = await axios.post<ApiRespone>(`${API_URL}/productos`, Producto, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Producto;
    }
    return response.data.data as Producto;
  } catch (error) {
    return {} as Producto;
  }
}

const updateProducto = async (id: string, Producto: Producto): Promise<Producto> => {
  try {
    const response = await axios.put<ApiRespone>(`${API_URL}/productos/${id}`, Producto, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Producto;
    }
    return response.data.data as Producto;
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return {} as Producto;
  }
}

const deleteProducto = async (id: string): Promise<boolean> => {
  try {
    const response = await axios.delete<ApiRespone>(`${API_URL}/productos/${id}`, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return false;
    }
    return true;
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return false;
  }
}

export const productosService = {
  getproductos,
  getProducto,
  createProducto,
  updateProducto,
  deleteProducto
}