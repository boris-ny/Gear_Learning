import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import dotenv from 'dotenv'
import dns from "dns";

const env = dotenv.config().parsed;
dns.setDefaultResultOrder("verbatim");


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host:'0.0.0.0',
    port: env.PORT || 8080,
  },
  build: {
    outDir: "../dist",
  },
});
