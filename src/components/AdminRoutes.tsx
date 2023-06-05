import React from "react";
import {
  Bodegas,
  BodegasForm,
  Dashboard,
  Empleados,
  EmpleadosForm,
  Proveedores,
  ProveedoresForm,
} from "@/pages";
import { Route, Routes } from "react-router-dom";

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    {/* PROVEEDORES */}
    <Route path="/proveedores" element={<Proveedores />} />
    <Route path="/proveedores/nuevo" element={<ProveedoresForm />} />
    <Route path="/proveedores/:id" element={<ProveedoresForm />} />
    {/* EMPLEADOS */}
    <Route path="/empleados" element={<Empleados />} />
    <Route path="/empleados/nuevo" element={<EmpleadosForm />} />
    <Route path="/empleados/:id" element={<EmpleadosForm />} />
    {/* BODEGAS */}
    <Route path="/bodegas" element={<Bodegas />} />
    <Route path="/bodegas/nuevo" element={<BodegasForm />} />
    <Route path="/bodegas/:id" element={<BodegasForm />} />
  </Routes>
);

export default AdminRoutes;
