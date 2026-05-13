import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

if (!supabaseUrl || !supabaseAnonKey) {
  throw new Error('Faltan variables de entorno de Supabase')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)

// Tipos para TypeScript
export type Lead = {
  id?: string
  created_at?: string
  nombre: string
  email: string
  pais?: string
  rol?: string
  tipo_asesoria: string
  precio_estimado?: string
  proyecto?: string
  facturacion?: string
  urgencia?: string
  estado?: string
  notas?: string
}