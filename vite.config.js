import { defineConfig } from 'vite';
import React from '@vitejs/plugin-react-swc';

export default defineConfig({
	plugins: [React()],
});
