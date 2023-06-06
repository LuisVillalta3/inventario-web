import { Button, TextArea, TextInput, Select } from "@/components";
import { ValueSchema } from "@/components/Select";
import { productosService } from "@/services/productos.service";
import { proveedoresService } from "@/services/proveedores.service";
import { useLayoutStore } from "@/store";
import { Producto } from "@/types/models/producto";
import { validationProductoSchema } from "@/validations/productoSchame";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

const BodegasForm = () => {
  const setAppTitle = useLayoutStore((state) => state.setAppTitle);
  const { id } = useParams<any>();
  const navigate = useNavigate();
  const [proveedores, setProveedores] = React.useState<ValueSchema[]>([]);

  useEffect(() => {
    const getProveedores = async () => {
      const res = await proveedoresService.getProveedores();
      const values: ValueSchema[] = res.map(({ id, nombre }) => ({
        value: id as string,
        label: nombre,
      }));
      setProveedores(values);
    };
    getProveedores();
  }, []);

  const formik = useFormik({
    initialValues: {
      idProducto: "",
      nombre: "",
      proveedorId: "",
      descripcion: "",
    },
    validationSchema: validationProductoSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async (values) => {
      const proveedor: Producto = {
        nombre: values.nombre,
        descripcion: values.descripcion,
        id_proveedor: values.proveedorId,
        code: values.idProducto,
      };
      const res = await productosService.createProducto(proveedor);
      if (res.id) {
        toast("Producto creado con éxito");
        navigate("/productos");
      }
    },
  });

  useEffect(
    () => setAppTitle(`${id ? "Editar" : "Agregar"} Bodega`),
    [setAppTitle, id]
  );

  return (
    <>
      <form onSubmit={formik.handleSubmit} style={{ maxWidth: 750 }}>
        <TextInput
          placeholder="ID de bodega"
          label="ID de bodega"
          error={
            (formik.touched.idProducto && formik.errors.idProducto) as boolean
          }
          errorMessage={
            (formik.touched.idProducto && formik.errors.idProducto) || ""
          }
          value={formik.values.idProducto}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="idProducto"
          name="idProducto"
        />

        <TextInput
          placeholder="Nombre"
          label="Nombre"
          error={(formik.touched.nombre && formik.errors.nombre) as boolean}
          errorMessage={(formik.touched.nombre && formik.errors.nombre) || ""}
          value={formik.values.nombre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="nombre"
          name="nombre"
        />

        <Select
          blank="Id del proveedor"
          label="Id del proveedor"
          options={proveedores}
          error={
            (formik.touched.proveedorId && formik.errors.proveedorId) as boolean
          }
          errorMessage={
            (formik.touched.proveedorId && formik.errors.proveedorId) || ""
          }
          value={formik.values.proveedorId}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="proveedorId"
          name="proveedorId"
        />

        <TextArea
          placeholder="Descripcion"
          noresize
          rows={3}
          label="Descripcion"
          error={
            (formik.touched.descripcion && formik.errors.descripcion) as boolean
          }
          errorMessage={
            (formik.touched.descripcion && formik.errors.descripcion) || ""
          }
          value={formik.values.descripcion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="descripcion"
          name="descripcion"
        />

        <Button type="submit">{`${id ? "Editar" : "Agregar"} producto`}</Button>
      </form>
    </>
  );
};

export default BodegasForm;
