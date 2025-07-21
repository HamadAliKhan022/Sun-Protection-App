// vite.config.js
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Sun-Protection-App/', // 🔁 repo name
  plugins: [react()]
});
