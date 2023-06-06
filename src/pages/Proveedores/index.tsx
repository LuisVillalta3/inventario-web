import { DataTable, LinkButton } from "@/components";
import { proveedoresService } from "@/services/proveedores.service";
import { useLayoutStore } from "@/store";
import { Proveedor } from "@/types/models/proveedor";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "idProveedor", headerName: "Código", flex: 1 },
  { field: "nombre", headerName: "Nombre", flex: 1 },
  {
    field: "email",
    headerName: "Email",
    flex: 1,
  },
  { field: "direccion", headerName: "Dirección", flex: 1 },
  { field: "telefono", headerName: "Teléfono", flex: 1 },
  { field: "fax", headerName: "fax", flex: 1 },
];

const Proveedores = () => {
  const [rows, setRows] = useState<Proveedor[]>([]);

  useEffect(() => {
    const getProveedores = async () => {
      const res = await proveedoresService.getProveedores();
      setRows(res);
    };
    getProveedores();
  }, []);

  const setAppTitle = useLayoutStore((state) => state.setAppTitle);

  useEffect(() => setAppTitle("Proveedores"), [setAppTitle]);

  return (
    <>
      <div style={{ textAlign: "right", marginBottom: 16 }}>
        <LinkButton to="/proveedores/nuevo" label="Agregar proveedor" />
      </div>
      <DataTable columns={columns} rows={rows} />
    </>
  );
};

export default Proveedores;
