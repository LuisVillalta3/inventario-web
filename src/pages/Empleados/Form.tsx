import { Button, TextArea, TextInput } from "@/components";
import { useLayoutStore } from "@/store";
import { validationEmpleadoSchema } from "@/validations/empleadoScheme";
import { Checkbox, FormControlLabel } from "@mui/material";
import { useFormik } from "formik";
import React, { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import _ from "lodash";
import { toast } from "react-toastify";
import { empleadosService } from "@/services/empleados.service";
import { Empleado } from "@/types/models/empleado";

const password = _.times(20, () => _.random(35).toString(36)).join("");

const EmpleadosForm = () => {
  const setAppTitle = useLayoutStore((state) => state.setAppTitle);
  const { id } = useParams<any>();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
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
    onSubmit: async (values) => {
      const proveedor: Empleado = {
        nombre: values.nombre,
        telefono: values.telefono,
        direccion: values.direccion,
        email: values.email,
        fecha_contratacion: values.fechaContratacion,
        dui: values.dui,
        password: values.contrasena,
        c_password: values.confirmarContrasena,
      };
      const res = await empleadosService.createempleado(proveedor);
      if (res.id) {
        toast("Empleado creado con éxito");
        navigate("/empleados");
      }
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
          placeholder="Nombre"
          error={(formik.touched.nombre && formik.errors.nombre) as boolean}
          errorMessage={(formik.touched.nombre && formik.errors.nombre) || ""}
          value={formik.values.nombre}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          id="nombre"
          name="nombre"
          label="Nombre"
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
          label="Email"
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
          label="Dui"
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
          label="Dirección"
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
          label="Teléfono"
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
              label="Contraseña"
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
              label="Confirmar contraseña"
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
