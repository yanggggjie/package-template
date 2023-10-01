import { defineConfig } from 'tsup'

export default defineConfig({
  entry: ['src/lib/index.tsx'],
  splitting: false,
  sourcemap: true,
  clean: true,
  dts: true,
  format:['esm'],
  external:['react','react-dom'],
  outDir:'dist',
})
