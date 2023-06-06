import { DataTable, LinkButton } from "@/components";
import { empleadosService } from "@/services/empleados.service";
import { useLayoutStore } from "@/store";
import { Empleado } from "@/types/models/empleado";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "nombre", headerName: "Nombre", flex: 1 },
  { field: "dui", headerName: "Dui", flex: 1 },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  {
    field: "fecha_contratacion",
    headerName: "Fecha de contratación",
    flex: 1,
  },
  { field: "direccion", headerName: "Dirección", flex: 1 },
  { field: "telefono", headerName: "Teléfono", flex: 1 },
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
      <div style={{ textAlign: "right", marginBottom: 16, maxWidth: 1200 }}>
        <LinkButton to="/empleados/nuevo" label="Agregar empleado" />
      </div>
      <DataTable columns={columns} rows={rows} />
    </>
  );
};

export default Empleados;
