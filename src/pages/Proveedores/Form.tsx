import { Button, TextArea, TextInput } from "@/components";
import { useLayoutStore } from "@/store";
import { validationProveedorSchema } from "@/validations/proveedorSchame";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const ProveedoresForm = () => {
  const setAppTitle = useLayoutStore((state) => state.setAppTitle);
  const { id } = useParams<any>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      idProveedor: "",
      nombre: "",
      telefono: "",
      direccion: "",
      fax: "",
      email: "",
    },
    validationSchema: validationProveedorSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log("values", values);
      navigate("/proveedores");
    },
  });

  useEffect(
    () => setAppTitle(`${id ? "Editar" : "Agregar"} proveedor`),
    [setAppTitle, id]
  );

  return (
    <>
      <form onSubmit={formik.handleSubmit} style={{ maxWidth: 750 }}>
        <TextInput
          placeholder="ID de provedor"
          error={
            (formik.touched.idProveedor && formik.errors.idProveedor) as boolean
          }
          errorMessage={
            (formik.touched.idProveedor && formik.errors.idProveedor) || ""
          }
          value={formik.values.idProveedor}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="idProveedor"
          name="idProveedor"
        />

        <TextInput
          placeholder="Nombre"
          error={(formik.touched.nombre && formik.errors.nombre) as boolean}
          errorMessage={(formik.touched.nombre && formik.errors.nombre) || ""}
          value={formik.values.nombre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="nombre"
          name="nombre"
        />

        <TextArea
          placeholder="Dirección"
          error={
            (formik.touched.direccion && formik.errors.direccion) as boolean
          }
          errorMessage={
            (formik.touched.direccion && formik.errors.direccion) || ""
          }
          value={formik.values.direccion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="direccion"
          name="direccion"
          noresize
          rows={6}
        />

        <TextInput
          placeholder="Teléfono"
          error={(formik.touched.telefono && formik.errors.telefono) as boolean}
          errorMessage={
            (formik.touched.telefono && formik.errors.telefono) || ""
          }
          value={formik.values.telefono}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="telefono"
          type="tel"
          name="telefono"
        />

        <TextInput
          placeholder="Fax"
          error={(formik.touched.fax && formik.errors.fax) as boolean}
          errorMessage={(formik.touched.fax && formik.errors.fax) || ""}
          value={formik.values.fax}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="fax"
          name="fax"
        />

        <Button type="submit">{`${
          id ? "Editar" : "Agregar"
        } proveedor`}</Button>
      </form>
    </>
  );
};

export default ProveedoresForm;
