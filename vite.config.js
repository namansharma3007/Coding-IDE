import { defineConfig, loadEnv } from "vite";
import react from '@vitejs/plugin-react';

const keys = [
  "VITE_API_URL",
  "VITE_X_RAPID_API_KEY",
  "VITE_X_RAPID_API_HOST",
  "VITE_UPSTASH_REDIS_REST_URL",
  "VITE_UPSTASH_REDIS_REST_TOKEN"
]

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');
  let processEnv = {};
  keys.forEach(key => processEnv[key] = env[key]);
  return {
    plugins: [react()],
    define: {
      'process.env': processEnv
    },
  };
});