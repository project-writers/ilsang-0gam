import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: [
			{
				find: '@component',
				replacement: path.resolve(__dirname, 'src/component'),
			},
			{
				find: '@',
				replacement: path.resolve(__dirname, 'src'),
			},
		],
	},
	build: {
		// 깃헙 페이지 전용
		assetsDir: './ilsang-0gam',
	},
})
