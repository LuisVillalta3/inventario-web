import { Button, TextArea, TextInput } from "@/components";
import { useLayoutStore } from "@/store";
import { validationEmpleadoSchema } from "@/validations/empleadoScheme";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import _ from "lodash";

const password = _.times(20, () => _.random(35).toString(36)).join("");

const EmpleadosForm = () => {
  const setAppTitle = useLayoutStore((state) => state.setAppTitle);
  const { id } = useParams<any>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      idempleado: "",
      nombre: "",
      telefono: "",
      direccion: "",
      email: "",
      fechaContratacion: "",
      dui: "",
      contrasena: password,
      confirmarContrasena: password,
      autogen: true,
    },
    validationSchema: validationEmpleadoSchema,
    validateOnBlur: true,
    validateOnChange: true,
    onSubmit: (values) => {
      console.log("values", values);
      navigate("/empleados");
    },
  });

  useEffect(
    () => setAppTitle(`${id ? "Editar" : "Agregar"} empleado`),
    [setAppTitle, id]
  );

  useEffect(() => {
    if (formik.values.autogen) {
      formik.setFieldValue("contrasena", password);
      formik.setFieldValue("confirmarContrasena", password);
    } else {
      formik.setFieldValue("contrasena", "");
      formik.setFieldValue("confirmarContrasena", "");
    }
  }, [formik.values.autogen]);

  return (
    <>
      <form onSubmit={formik.handleSubmit} style={{ maxWidth: 750 }}>
        <TextInput
          placeholder="ID de empleado"
          error={
            (formik.touched.idempleado && formik.errors.idempleado) as boolean
          }
          errorMessage={
            (formik.touched.idempleado && formik.errors.idempleado) || ""
          }
          value={formik.values.idempleado}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="idempleado"
          name="idempleado"
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

        <TextInput
          placeholder="Email"
          type="email"
          error={(formik.touched.email && formik.errors.email) as boolean}
          errorMessage={(formik.touched.email && formik.errors.email) || ""}
          value={formik.values.email}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="email"
          name="email"
        />

        <TextInput
          placeholder="Dui"
          error={(formik.touched.dui && formik.errors.dui) as boolean}
          errorMessage={(formik.touched.dui && formik.errors.dui) || ""}
          value={formik.values.dui}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="dui"
          name="dui"
        />

        <TextInput
          label="Fecha de contratación"
          type="date"
          error={
            (formik.touched.fechaContratacion &&
              formik.errors.fechaContratacion) as boolean
          }
          errorMessage={
            (formik.touched.fechaContratacion &&
              formik.errors.fechaContratacion) ||
            ""
          }
          value={formik.values.fechaContratacion}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="fechaContratacion"
          name="fechaContratacion"
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

        <FormControlLabel
          value={formik.values.autogen}
          control={
            <Checkbox
              defaultChecked
              name="autogen"
              onChange={formik.handleChange}
              sx={{
                color: "#077187",
                "&.Mui-checked": {
                  color: "#077187",
                },
              }}
            />
          }
          label="Autogenerar contraseña"
          labelPlacement="end"
        />

        {!formik.values.autogen && (
          <>
            <br />
            <br />
            <TextInput
              placeholder="Contraseña"
              type="password"
              error={
                (formik.touched.contrasena &&
                  formik.errors.contrasena) as boolean
              }
              errorMessage={
                (formik.touched.contrasena && formik.errors.contrasena) || ""
              }
              value={formik.values.contrasena}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="contrasena"
              name="contrasena"
            />
            <TextInput
              placeholder="Confirmar contraseña"
              type="password"
              error={
                (formik.touched.confirmarContrasena &&
                  formik.errors.confirmarContrasena) as boolean
              }
              errorMessage={
                (formik.touched.confirmarContrasena &&
                  formik.errors.confirmarContrasena) ||
                ""
              }
              value={formik.values.confirmarContrasena}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              id="confirmarContrasena"
              name="confirmarContrasena"
            />
          </>
        )}

        <br />
        <br />

        <Button type="submit">{`${id ? "Editar" : "Agregar"} empleado`}</Button>
      </form>
    </>
  );
};

export default EmpleadosForm;
