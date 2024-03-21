// import { defineConfig, loadEnv } from "vite";
// import react from '@vitejs/plugin-react';


// // https://vitejs.dev/config/
// export default defineConfig(({ mode }) => {
//   const env = loadEnv(mode, process.cwd(), '');
  
//   return {
//     plugins: [react()],
//     define: {
//       'process.env.VITE_API_URL': JSON.stringify(env.VITE_API_URL),
//       'process.env.VITE_X_RAPID_API_KEY': JSON.stringify(env.VITE_X_RAPID_API_KEY),
//       'process.env.VITE_X_RAPID_API_HOST': JSON.stringify(env.VITE_X_RAPID_API_HOST),
//       'process.env.VITE_UPSTASH_REDIS_REST_URL': JSON.stringify(env.VITE_UPSTASH_REDIS_REST_URL),
//       'process.env.VITE_UPSTASH_REDIS_REST_TOKEN': JSON.stringify(env.VITE_UPSTASH_REDIS_REST_TOKEN),
//     },
//   };
// });

import { defineConfig , loadEnv} from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
    const env = loadEnv(mode, process.cwd(), '');
    
    return {
      plugins: [react()],
      define: {
        'process.env':env
      },
    };
  });
  