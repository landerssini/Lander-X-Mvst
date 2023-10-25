import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Puedes especificar aquí la dirección IP o el nombre de host que desees utilizar
    port: 5173, // Puedes cambiar el puerto si lo deseas
  }
})
