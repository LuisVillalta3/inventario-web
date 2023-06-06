import React from "react";
import { TextInput } from "@/components";
import "./Login.scss";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validationLoginSchema } from "@/validations/loginSchema";
import { loginService } from "@/services/login.service";
import { useAuthStore } from "@/store";

const Login = () => {
  const navigate = useNavigate();
  const setToken = useAuthStore((state) => state.setToken);

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationLoginSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: async ({ email, password }) => {
      const res = await loginService.login(email, password);
      if (res?.token) {
        localStorage.setItem("token", res.token);
        setToken(res.token);
        navigate("/");
      }
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
