// Imports
import adapter from '@sveltejs/adapter-auto';
import { vitePreprocess } from '@sveltejs/vite-plugin-svelte';

// Svelte configuration
const config = {
	preprocess: vitePreprocess(),
	kit: {
		adapter: adapter()
	}
};

// Exports
export default config;
