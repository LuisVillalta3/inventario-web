import { Button, TextArea, TextInput } from "@/components";
import { useLayoutStore } from "@/store";
import { validationBodegaSchema } from "@/validations/bodegaSchame";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

const BodegasForm = () => {
  const setAppTitle = useLayoutStore((state) => state.setAppTitle);
  const { id } = useParams<any>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      idBodega: "",
      nombre: "",
      telefono: "",
      direccion: "",
      fax: "",
      email: "",
    },
    validationSchema: validationBodegaSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log("values", values);
      navigate("/Bodegas");
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
          error={(formik.touched.idBodega && formik.errors.idBodega) as boolean}
          errorMessage={
            (formik.touched.idBodega && formik.errors.idBodega) || ""
          }
          value={formik.values.idBodega}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="idBodega"
          name="idBodega"
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

        <Button type="submit">{`${id ? "Editar" : "Agregar"} Bodega`}</Button>
      </form>
    </>
  );
};

export default BodegasForm;
