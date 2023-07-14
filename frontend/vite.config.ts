import * as path from 'path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import 'dotenv/config'

const base = process?.env?.BASE_ENV === 'PRODUCTION' ? '/' : '/ilsang-0gam'
// const base = '/ilsang-0gam/'

export default defineConfig({
	plugins: [react()],
	base,
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
})
