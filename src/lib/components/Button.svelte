<script lang="ts">
	// Imports
	import type { Color } from '$lib/types/styles.ts'
	import type { ButtonVariant } from '$lib/types/variants.ts'
	import { transformColorToCssVariable } from '$lib/utilities/transformers.js'

	// Props
	export let color: Color = 'black'
	export let backgroundColor: Color = 'white'
	export let variant: ButtonVariant = 'solid'
	export let text: string = 'Button'

	// Reactive to change in props
	$: if (color || backgroundColor || variant || text) {
		if (!text) {
			text = 'Button'
		}
		constructedStyles = constructStyles()
	}

	// State
	let classNames = ['geist', 'fw-5-9', 'fs-2-13']
	let constructedStyles: string = constructStyles()

	// Choose variant class
	classNames.push(variant + '-variant')

	// Dynamically construct styles
	function constructStyles() {
		return `
            color: var(${transformColorToCssVariable(color, 5)});
            background-color: var(${transformColorToCssVariable(backgroundColor, 5)});
        `
	}
</script>

<button
	class="{classNames.join(' ')}"
	style="{constructedStyles}">{text}</button
>

<style>
	button {
		cursor: pointer;
		transition: filter var(--time-1-6) ease;
	}

	button:hover {
		filter: brightness(85%);
	}

	.solid-variant {
		padding: var(--spacing-1-6) var(--spacing-3-6);
		border-radius: var(--br-2-7);
	}
</style>
