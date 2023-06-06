export type Empleado = {
  id?: number | string
  dui?: string
  nombre: string
  email: string | null
  direccion: string | null
  telefono: string | null
  password?: string | null
  c_password?: string | null
  fecha_contratacion?: string | null
}