import AppLayout from "@/layouts/AppLayout";
import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = (props: { isAuth: boolean; children: React.ReactNode }) =>
  props.isAuth ? (
    <AppLayout>{props.children}</AppLayout>
  ) : (
    <Navigate to="/login" />
  );

export default PrivateRoute;
