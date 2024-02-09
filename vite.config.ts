// Imports
import { sveltekit } from '@sveltejs/kit/vite'
import { defineConfig } from 'vitest/config'

// Vite configuration
const viteConfig = defineConfig({
	plugins: [sveltekit()],
	test: {
		include: ['src/tests/unit/**/*.{test,spec}.{js,ts}'],
		watch: false
	}
})

// Exports
export default viteConfig
