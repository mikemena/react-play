import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import eslintPlugin from 'vite-plugin-eslint';
import prettierPlugin from 'vite-plugin-prettier';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), eslintPlugin(), prettierPlugin()],
});
