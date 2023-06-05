import React from "react";
import { Dashboard, Proveedores, ProveedoresForm } from "@/pages";
import { Route, Routes } from "react-router-dom";

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
    {/* PROVEEDORES */}
    <Route path="/proveedores" element={<Proveedores />} />
    <Route path="/proveedores/nuevo" element={<ProveedoresForm />} />
    <Route path="/proveedores/:id" element={<ProveedoresForm />} />
  </Routes>
);

export default AdminRoutes;
