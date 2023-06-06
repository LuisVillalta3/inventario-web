import { DataTable, LinkButton } from "@/components";
import { bodegasService } from "@/services/bodegas.service";
import { useLayoutStore } from "@/store";
import { Bodega } from "@/types/models/bodega";
import { GridColDef } from "@mui/x-data-grid";
import React, { useEffect, useState } from "react";

const columns: GridColDef[] = [
  { field: "id", headerName: "ID" },
  { field: "code", headerName: "Código" },
  { field: "nombre", headerName: "Nombre" },
  { field: "direccion", headerName: "Dirección" },
  { field: "telefono", headerName: "Teléfono" },
  { field: "fax", headerName: "fax" },
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
      <div style={{ textAlign: "right", marginBottom: 16 }}>
        <LinkButton to="/bodegas/nuevo" label="Agregar Bodega" />
      </div>
      <DataTable columns={columns} rows={rows} />
    </>
  );
};

export default Bodegas;
