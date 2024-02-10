<script lang="ts">
	// Imports
	import type { Color } from "$lib/types/styles.ts"
	import type { ButtonVariant } from "$lib/types/variants.ts"

	// Props
	export let color: Color = "black"
	export let backgroundColor: Color = "white"
	export let variant: ButtonVariant = "solid"
	export let label: string = "Button"

	let classes: string[] = []

	// Reactive to change in props
	$: {
		classes = ["geist", "fw-5-9", "fs-2-13", "lh-2-13"]
		if (!label) label = "Button"
		let transformedColor = ["black", "white"].includes(color) ? color : `${color}-5-9`
		let transformedBackgroundColor = ["black", "white"].includes(backgroundColor)
			? `bg-${backgroundColor}`
			: `bg-${backgroundColor}-5-9`
		classes.push(...[transformedColor, transformedBackgroundColor, variant + "-variant"])
	}
</script>

<button class="{classes.join(' ')}">{label}</button>

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

	.link-variant {
		background-color: transparent;
		padding-bottom: 1px;
	}

	.link-variant:hover {
		text-decoration: underline;
		text-underline-offset: 3px;
	}

	.outline-variant {
		padding: var(--spacing-1-6) var(--spacing-3-6);
		border-radius: var(--br-2-7);
		background-color: transparent;
		border: 1px solid;
	}

	.ghost-variant {
		padding: var(--spacing-1-6) var(--spacing-3-6);
		border-radius: var(--br-2-7);
		position: relative;
	}

	.ghost-variant::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		opacity: 0.1;
		z-index: -1;
	}
</style>
