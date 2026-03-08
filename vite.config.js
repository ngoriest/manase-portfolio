import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],

  build: {
    // Increase chunk warning limit slightly (default 500kb)
    chunkSizeWarningLimit: 600,

    rollupOptions: {
      output: {
        // Manual chunk splitting - keeps vendor libs separate from your code
        // Browsers cache these chunks independently, so return visitors load faster
        manualChunks: {
          // React core - rarely changes, cached aggressively
          'vendor-react': ['react', 'react-dom'],
          // Framer Motion is large (~100kb gzipped) - isolate it
          'vendor-framer': ['framer-motion'],
          // Lucide icons - isolate so it doesn't bloat your main bundle
          'vendor-lucide': ['lucide-react'],
        },
      },
    },
  },

  // Faster dev server HMR
  server: {
    hmr: true,
  },
})