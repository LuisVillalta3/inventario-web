import * as Yup from 'yup';

export const validationBodegaSchema = Yup.object({
  idBodega: Yup.string().required('Campo requerido *'),
  email: Yup.string().trim().email('Email invalido').required('Campo requerido *'),
  nombre: Yup.string().required('Campo requerido *'),
  telefono: Yup.string().required('Campo requerido *'),
  direccion: Yup.string().required('Campo requerido *'),
  fax: Yup.string()
});
