// Imports
import type { PlaywrightTestConfig } from "@playwright/test"

// Playwright configuration
const playwrightConfig: PlaywrightTestConfig = {
	webServer: {
		command: "npm run dev --test",
		port: 5173
	},
	testDir: "./src/tests/browser",
	testMatch: /(.+\.)?(test|spec)\.[jt]s/
}

// Exports
export default playwrightConfig
