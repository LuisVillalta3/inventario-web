import * as Yup from 'yup';

export const validationSoporteSchema = Yup.object({
  email: Yup.string().trim().email('Email invalido').required('Campo requerido *'),
  asunto: Yup.string().required('Campo requerido *'),
  mensaje: Yup.string().required('Campo requerido *')
});
