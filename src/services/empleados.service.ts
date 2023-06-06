import { API_HEADER, API_URL } from "@/static";
import { Empleado } from "@/types/models/empleado";
import { ApiRespone } from "@/types/responses";
import axios from "axios";
import { toast } from "react-toastify";

const getempleados = async (): Promise<Empleado[]> => {
  try {
    const response = await axios.get<ApiRespone>(`${API_URL}/usuarios`, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return [];
    }
    return response.data.data as Empleado[];
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return [];
  }
}

const getempleado = async (id: string): Promise<Empleado> => {
  try {
    const response = await axios.get<ApiRespone>(`${API_URL}/usuarios/${id}`, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Empleado;
    }
    return response.data.data as Empleado;
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return {} as Empleado;
  }
}

const createempleado = async (empleado: Empleado): Promise<Empleado> => {
  try {
    const response = await axios.post<ApiRespone>(`${API_URL}/usuarios`, empleado, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Empleado;
    }
    return response.data.data as Empleado;
  } catch (error) {
    return {} as Empleado;
  }
}

const updateempleado = async (id: string, empleado: Empleado): Promise<Empleado> => {
  try {
    const response = await axios.put<ApiRespone>(`${API_URL}/usuarios/${id}`, empleado, API_HEADER);
    if (!response.data.success) { 
      toast('Ocurrio un error', { type: "error" })
      return {} as Empleado;
    }
    return response.data.data as Empleado;
  } catch (error) {
    toast('Ocurrio un error', { type: "error" })
    return {} as Empleado;
  }
}

const deleteempleado = async (id: string): Promise<boolean> => {
  try {
    const response = await axios.delete<ApiRespone>(`${API_URL}/usuarios/${id}`, API_HEADER);
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

export const empleadosService = {
  getempleados,
  getempleado,
  createempleado,
  updateempleado,
  deleteempleado
}