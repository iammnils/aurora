<script lang="ts">
	import type { Card } from '$lib/types/types';

	export let flipCards: Card[];
	export let displayedCard: Card;
</script>

<ul class="flex gap-1 px-1">
	{#each flipCards as flipCard (flipCard.id)}
		<li
			class="badge badge-xs"
			class:badge-accent={displayedCard.id === flipCard.id}
			class:badge-ghost={displayedCard.id !== flipCard.id}
		/>
	{/each}
</ul>
