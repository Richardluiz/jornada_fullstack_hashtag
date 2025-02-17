import { defineConfig } from 'vite'
import path from 'path'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    target: 'esnext',
  },
  resolve: {
    alias: {
      '@': path.resolve('src'),  // Modifiquei para não depender do __dirname
    },
    extensions: ['.js', '.jsx', '.ts', '.tsx'],  // Garantindo que o Vite reconheça as extensões
  },
})
