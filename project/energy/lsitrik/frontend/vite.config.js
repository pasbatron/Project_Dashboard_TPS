import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Mengizinkan akses dari jaringan yang sama
    port: 5173, // Bisa diubah sesuai kebutuhan
  }
})
