import { resolve } from 'node:path'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// Built as a library. The apps import it through dist, so Storybook's dependency
// graph stops at this package's boundary (see dist-boundary-packages in the workflow)
export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: resolve(import.meta.dirname, 'src/index.ts'),
      formats: ['es'],
      fileName: 'index',
    },
    rollupOptions: {
      external: (id) =>
        /^(react|react-dom)(\/|$)/.test(id),
    },
  },
})
