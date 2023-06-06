import { Button, TextArea, TextInput } from "@/components";
import { proveedoresService } from "@/services/proveedores.service";
import { useLayoutStore } from "@/store";
import { Proveedor } from "@/types/models/proveedor";
import { validationProveedorSchema } from "@/validations/proveedorSchame";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { toast } from "react-toastify";

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
    onSubmit: async (values) => {
      const proveedor: Proveedor = {
        idProveedor: values.idProveedor,
        nombre: values.nombre,
        telefono: values.telefono,
        direccion: values.direccion,
        fax: values.fax,
        email: values.email,
      };
      const res = await proveedoresService.createProveedor(proveedor);
      if (res.id) {
        toast("Proveedor creado con éxito");
        navigate("/proveedores");
      }
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
          label="ID de provedor"
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
          label="Nombre"
          error={(formik.touched.nombre && formik.errors.nombre) as boolean}
          errorMessage={(formik.touched.nombre && formik.errors.nombre) || ""}
          value={formik.values.nombre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="nombre"
          name="nombre"
        />

        <TextInput
          placeholder="Email"
          label="Email"
          error={(formik.touched.email && formik.errors.email) as boolean}
          errorMessage={(formik.touched.email && formik.errors.email) || ""}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          name="email"
        />

        <TextArea
          label="Dirección"
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
          label="Teléfono"
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
          label="Fax"
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
