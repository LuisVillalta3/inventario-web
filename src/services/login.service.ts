import { API_URL } from "@/static";
import axios from "axios";
import { toast } from "react-toastify";

const login = async (email: string, password: string) => {
  try {
    const response = await axios.post(`${API_URL}/login`, {
      email,
      password
    });
    
    if (!response.data.success) {
      toast('Ocurrio un error', {
        type: "error"
      });
      return {};
    }

    return response.data.data;
  } catch (error: any) {
    const message = error.response.status === 401 || error.response.status === 404 ? 'Credenciales incorrectas' : 'Ocurrio un error';
    toast(message, {
      type: "error"
    });
    return {};
  }
}

export const loginService = {
  login
}