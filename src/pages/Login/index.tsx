import React from "react";
import { TextInput } from "@/components";
import "./Login.scss";
import { Link } from "react-router-dom";
import { useFormik } from "formik";
import { validationLoginSchema } from "@/validations/loginSchema";

const Login = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationLoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log("values", values);
    },
  });

  return (
    <main className="login">
      <form onSubmit={formik.handleSubmit}>
        <h1>Iniciar sesión</h1>
        <TextInput
          placeholder="ID de usuario"
          error={(formik.touched.email && formik.errors.email) as boolean}
          errorMessage={(formik.touched.email && formik.errors.email) || ""}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          name="email"
        />
        <TextInput
          placeholder="Contraseña"
          type="password"
          id="password"
          error={(formik.touched.password && formik.errors.password) as boolean}
          errorMessage={
            (formik.touched.password && formik.errors.password) || ""
          }
          value={formik.values.password}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          name="password"
        />
        <button type="submit">Login</button>
        <Link to="/soporte">Contactar a soporte</Link>
      </form>
    </main>
  );
};

export default Login;
