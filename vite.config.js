import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  envPrefix: ['OPEN_WEATHER_'],
  plugins: [react(), tailwindcss()],
  optimizeDeps: {
    include: ['lucide-react'],
  },
})
