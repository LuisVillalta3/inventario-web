import { DataTable, LinkButton } from "@/components";
import { proveedoresService } from "@/services/proveedores.service";
import { useLayoutStore } from "@/store";
import { Proveedor } from "@/types/models/proveedor";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "idProveedor", headerName: "Código" },
  { field: "nombre", headerName: "Nombre" },
  {
    field: "email",
    headerName: "Email",
  },
  { field: "direccion", headerName: "Dirección" },
  { field: "telefono", headerName: "Teléfono" },
  { field: "fax", headerName: "fax" },
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
