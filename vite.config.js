import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vitejs.dev/config/
export default defineConfig({
  // >>> AJOUTEZ LA LIGNE 'base' ICI <<<
  //base: '/anta_cisse/', 
  
  plugins: [
    react(),
    tailwindcss(),
  ],
})