// Imports
import type { Color } from '$lib/types/styles.js'

function transformColorToCssVariable(color: Color, shadeIndex?: number) {
	if (color === 'black' || color === 'white') {
		return `--${color}`
	} else {
		if (!shadeIndex) throw new Error('A non standard color must have a shade index provided.')
		if (shadeIndex > 9 || shadeIndex < 1) {
			throw new Error("A color's shade must be from 1 to 9.")
		} else {
			return `--${color}-${shadeIndex}-9`
		}
	}
}

// Exports
export { transformColorToCssVariable }
