import { API_HEADER, API_URL } from "@/static";
import { Proveedor } from "@/types/models/proveedor";
import { ApiRespone } from "@/types/responses";
import axios from "axios";
import { toast } from "react-toastify";

const getProveedores = async (): Promise<Proveedor[]> => {
  try {
    const response = await axios.get<ApiRespone>(`${API_URL}/proveedores`, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return [];
    }
    return response.data.data as Proveedor[];
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return [];
  }
}

const getProveedor = async (id: string): Promise<Proveedor> => {
  try {
    const response = await axios.get<ApiRespone>(`${API_URL}/proveedores/${id}`, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Proveedor;
    }
    return response.data.data as Proveedor;
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return {} as Proveedor;
  }
}

const createProveedor = async (proveedor: Proveedor): Promise<Proveedor> => {
  try {
    const response = await axios.post<ApiRespone>(`${API_URL}/proveedores`, proveedor, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Proveedor;
    }
    return response.data.data as Proveedor;
  } catch (error) {
    return {} as Proveedor;
  }
}

const updateProveedor = async (id: string, proveedor: Proveedor): Promise<Proveedor> => {
  try {
    const response = await axios.put<ApiRespone>(`${API_URL}/proveedores/${id}`, proveedor, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Proveedor;
    }
    return response.data.data as Proveedor;
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return {} as Proveedor;
  }
}

const deleteProveedor = async (id: string): Promise<boolean> => {
  try {
    const response = await axios.delete<ApiRespone>(`${API_URL}/proveedores/${id}`, API_HEADER);
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

export const proveedoresService = {
  getProveedores,
  getProveedor,
  createProveedor,
  updateProveedor,
  deleteProveedor
}