import * as Yup from 'yup';

export const validationEmpleadoSchema = Yup.object({
  email: Yup.string().trim().email('Email invalido').required('Campo requerido *'),
  nombre: Yup.string().required('Campo requerido *'),
  telefono: Yup.string().required('Campo requerido *'),
  direccion: Yup.string().required('Campo requerido *'),
  dui: Yup.string().required('Campo requerido *'),
  autogen: Yup.boolean(),
  contrasena: Yup.string().required('Campo requerido *'),
  confirmarContrasena: Yup.string().required('Campo requerido *'),
});
