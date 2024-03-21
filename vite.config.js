import { defineConfig, loadEnv } from "vite";
// import dotenv from 'dotenv';
// dotenv.config();
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  return defineConfig({
    define: {
      "process.env": env,
    },
    plugins: [react()],
  });
};

