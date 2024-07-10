// Imports
import type { PlaywrightTestConfig } from '@playwright/test';

// Playwright configuration
const playwrightConfig: PlaywrightTestConfig = {
	webServer: {
		command: 'npm run build && npm run preview',
		port: 4173
	},
	testDir: 'tests/browser',
	testMatch: /(.+\.)?(test|spec)\.[jt]s/,
	outputDir: 'tests/browser/results'
};

// Exports
export default playwrightConfig;
