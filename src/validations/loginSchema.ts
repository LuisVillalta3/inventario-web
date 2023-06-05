import * as Yup from 'yup';

export const validationLoginSchema = Yup.object({
  email: Yup.string().trim().email('Email invalido').required('Campo requerido *'),
  password: Yup.string().required('Campo requerido *')
});
