import { copyFileSync, existsSync } from 'node:fs'
import { join } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import photoManifest from './vite-plugin-photo-manifest.js'

// GitHub Pages serves 404.html for unknown paths. Copying index.html to
// 404.html lets client-side routes like /photography load on a hard refresh
// or direct visit instead of returning a 404.
function spaFallback() {
  let outDir = 'dist'
  return {
    name: 'spa-fallback-404',
    apply: 'build',
    configResolved(config) {
      outDir = config.build.outDir
    },
    closeBundle() {
      const index = join(outDir, 'index.html')
      if (existsSync(index)) {
        copyFileSync(index, join(outDir, '404.html'))
      }
    },
  }
}

export default defineConfig({
  plugins: [react(), photoManifest(), spaFallback()],
  server: {
    port: 5173,
    strictPort: true,
  },
})
