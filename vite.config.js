import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: "/ibm-react-final-project-e-plantShopping",
  plugins: [react()],
})