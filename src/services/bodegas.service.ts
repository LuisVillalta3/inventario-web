import { API_HEADER, API_URL } from "@/static";
import { Bodega } from "@/types/models/bodega";
import { ApiRespone } from "@/types/responses";
import axios from "axios";
import { toast } from "react-toastify";

const getbodegas = async (): Promise<Bodega[]> => {
  try {
    const response = await axios.get<ApiRespone>(`${API_URL}/bodegas`, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return [];
    }
    return response.data.data as Bodega[];
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return [];
  }
}

const getBodega = async (id: string): Promise<Bodega> => {
  try {
    const response = await axios.get<ApiRespone>(`${API_URL}/bodegas/${id}`, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Bodega;
    }
    return response.data.data as Bodega;
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return {} as Bodega;
  }
}

const createBodega = async (Bodega: Bodega): Promise<Bodega> => {
  try {
    const response = await axios.post<ApiRespone>(`${API_URL}/bodegas`, Bodega, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Bodega;
    }
    return response.data.data as Bodega;
  } catch (error) {
    return {} as Bodega;
  }
}

const updateBodega = async (id: string, Bodega: Bodega): Promise<Bodega> => {
  try {
    const response = await axios.put<ApiRespone>(`${API_URL}/bodegas/${id}`, Bodega, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Bodega;
    }
    return response.data.data as Bodega;
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return {} as Bodega;
  }
}

const deleteBodega = async (id: string): Promise<boolean> => {
  try {
    const response = await axios.delete<ApiRespone>(`${API_URL}/bodegas/${id}`, API_HEADER);
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

export const bodegasService = {
  getbodegas,
  getBodega,
  createBodega,
  updateBodega,
  deleteBodega
}