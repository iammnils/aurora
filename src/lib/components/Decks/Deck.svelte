<script lang="ts">
	import type { CardDeck } from '$lib/types/types';

	export let deck: CardDeck;
</script>

<button
	id={deck.id}
	class="card justify-center truncate w-40 h-40 p-2 bg-base-100 text-sm font-mono shadow-md btn btn-outline border-1"
	on:click
>
	{deck.title}
</button>
