import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Login, Soporte } from "./pages";
import "./index.scss";
import PrivateRoute from "./components/PrivateRoute";
import AdminRoutes from "./components/AdminRoutes";
import { useAuthStore } from "./store";

function App() {
  const token = useAuthStore((state) => state.token);

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/*"
          element={
            <PrivateRoute isAuth={token !== ""}>
              <AdminRoutes />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/soporte" element={<Soporte />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
