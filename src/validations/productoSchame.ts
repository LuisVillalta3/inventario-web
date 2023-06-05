import * as Yup from 'yup';

export const validationProductoSchema = Yup.object({
  idProducto: Yup.string().required('Campo requerido *'),
  nombre: Yup.string().required('Campo requerido *'),
  proveedorId: Yup.number().required('Campo requerido *'),
  descripcion: Yup.string().required('Campo requerido *'),
});
