import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    plugins: [react()],
    define: {
      'process.env': env,
    },
    base: '/', // Use the VITE_APP_BASE_PATH environment variable, or '/' as the default
  };
});