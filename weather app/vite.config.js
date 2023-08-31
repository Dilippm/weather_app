import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

// Rest of your Vite config
export default defineConfig({
  plugins: [react()],
});
