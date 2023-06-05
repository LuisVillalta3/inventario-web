import React from "react";
import { TextInput } from "@/components";
import "./Soporte.scss";
import { useFormik } from "formik";
import { validationSoporteSchema } from "@/validations/soporteSchema";
import TextArea from "@/components/TextArea";

const Soporte = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      asunto: "",
      mensaje: "",
    },
    validationSchema: validationSoporteSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <main className="soporte-lgn">
      <form onSubmit={formik.handleSubmit}>
        <h1>Soporte</h1>
        <TextInput
          placeholder="ID de usuario"
          error={(formik.touched.email && formik.errors.email) as boolean}
          errorMessage={(formik.touched.email && formik.errors.email) || ""}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          name="email"
          type="email"
        />
        <TextInput
          placeholder="Asunto"
          type="text"
          id="asunto"
          error={(formik.touched.asunto && formik.errors.asunto) as boolean}
          errorMessage={(formik.touched.asunto && formik.errors.asunto) || ""}
          value={formik.values.asunto}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="asunto"
        />
        <TextArea
          placeholder="Mensaje"
          id="mensaje"
          name="mensaje"
          error={(formik.touched.mensaje && formik.errors.mensaje) as boolean}
          errorMessage={(formik.touched.mensaje && formik.errors.mensaje) || ""}
          value={formik.values.mensaje}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          noresize
          rows={5}
        />
        <button type="submit">Contactar a soporte</button>
      </form>
    </main>
  );
};

export default Soporte;
