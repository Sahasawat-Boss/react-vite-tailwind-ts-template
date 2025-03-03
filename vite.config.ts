import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// https://tailwindcss.com/docs/installation/using-vite

export default defineConfig({
  plugins: [react(), tailwindcss()],
})
