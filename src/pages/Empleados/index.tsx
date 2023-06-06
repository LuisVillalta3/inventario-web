import { DataTable, LinkButton } from "@/components";
import { empleadosService } from "@/services/empleados.service";
import { useLayoutStore } from "@/store";
import { Empleado } from "@/types/models/empleado";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "nombre", headerName: "Nombre" },
  { field: "dui", headerName: "Dui" },
  {
    field: "email",
    headerName: "Email",
  },
  {
    field: "fecha_contratacion",
    headerName: "Fecha de contratación",
  },
  { field: "direccion", headerName: "Dirección" },
  { field: "telefono", headerName: "Teléfono" },
];

const Empleados = () => {
  const [rows, setRows] = useState<Empleado[]>([]);

  useEffect(() => {
    const getProveedores = async () => {
      const res = await empleadosService.getempleados();
      setRows(res);
    };
    getProveedores();
  }, []);

  const setAppTitle = useLayoutStore((state) => state.setAppTitle);

  useEffect(() => setAppTitle("Empleados"), [setAppTitle]);

  return (
    <>
      <div style={{ textAlign: "right", marginBottom: 16 }}>
        <LinkButton to="/empleados/nuevo" label="Agregar empleado" />
      </div>
      <DataTable columns={columns} rows={rows} />
    </>
  );
};

export default Empleados;
