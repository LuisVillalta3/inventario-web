import React from "react";
import { Dashboard } from "@/pages";
import { Route, Routes } from "react-router-dom";

const AdminRoutes = () => (
  <Routes>
    <Route path="/" element={<Dashboard />} />
  </Routes>
);

export default AdminRoutes;
