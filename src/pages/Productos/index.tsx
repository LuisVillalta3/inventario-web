import { DataTable, LinkButton } from "@/components";
import { productosService } from "@/services/productos.service";
import { useLayoutStore } from "@/store";
import { Producto } from "@/types/models/producto";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "code", headerName: "Código" },
  { field: "nombre", headerName: "Nombre" },
  {
    field: "id_proveedor",
    headerName: "ID Proveedor",
  },
  { field: "descripcion", headerName: "Descripción" },
];

const Productos = () => {
  const [rows, setRows] = useState<Producto[]>([]);

  useEffect(() => {
    const getProveedores = async () => {
      const res = await productosService.getproductos();
      setRows(res);
    };
    getProveedores();
  }, []);

  const setAppTitle = useLayoutStore((state) => state.setAppTitle);

  useEffect(() => setAppTitle("Productos"), [setAppTitle]);

  return (
    <>
      <div style={{ textAlign: "right", marginBottom: 16 }}>
        <LinkButton to="/productos/nuevo" label="Agregar producto" />
      </div>
      <DataTable columns={columns} rows={rows} />
    </>
  );
};

export default Productos;
