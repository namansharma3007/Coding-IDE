import { defineConfig, loadEnv } from "vite";
// import dotenv from 'dotenv';
// dotenv.config();
import react from '@vitejs/plugin-react'

const env = loadEnv(mode, process.cwd(), "")
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define:{
    'process.env': env
  },
  
});

