import { DataTable, LinkButton } from "@/components";
import { bodegasService } from "@/services/bodegas.service";
import { useLayoutStore } from "@/store";
import { Bodega } from "@/types/models/bodega";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID", flex: 1 },
  { field: "code", headerName: "Código", flex: 1 },
  { field: "nombre", headerName: "Nombre", flex: 1 },
  { field: "direccion", headerName: "Dirección", flex: 1 },
  { field: "telefono", headerName: "Teléfono", flex: 1 },
  { field: "fax", headerName: "fax", flex: 1 },
];

const Bodegas = () => {
  const [rows, setRows] = useState<Bodega[]>([]);

  useEffect(() => {
    const getBodegas = async () => {
      const res = await bodegasService.getbodegas();
      setRows(res);
    };
    getBodegas();
  }, []);

  const setAppTitle = useLayoutStore((state) => state.setAppTitle);

  useEffect(() => setAppTitle("Bodegas"), [setAppTitle]);

  return (
    <>
      <div style={{ textAlign: "right", marginBottom: 16, maxWidth: 1200 }}>
        <LinkButton to="/bodegas/nuevo" label="Agregar Bodega" />
      </div>
      <DataTable columns={columns} rows={rows} />
    </>
  );
};

export default Bodegas;
