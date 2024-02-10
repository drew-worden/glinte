<script lang="ts">
	// Imports
	import { Button } from '$lib/index.js'
	import type { Color } from '$lib/types/styles.js'
	import type { ButtonVariant } from '$lib/types/variants.js'

	// State
	let color: Color = 'black'
	let backgroundColor: Color = 'white'
	let variant: ButtonVariant = 'solid'
	let text = 'Button'
</script>

<input
	type="text"
	bind:value="{color}"
/>
<br />
<input
	type="text"
	bind:value="{backgroundColor}"
/>
<br />
<input
	type="text"
	bind:value="{variant}"
/>
<br />
<input
	type="text"
	bind:value="{text}"
/>
<br />
<br />
<Button
	color="{color}"
	backgroundColor="{backgroundColor}"
	variant="{variant}"
	text="{text}"
/>
