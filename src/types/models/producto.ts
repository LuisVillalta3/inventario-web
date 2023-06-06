export type Producto = {
  id?: number | string
  code: string
  nombre: string
  id_proveedor: string | null
  descripcion: string | null
}