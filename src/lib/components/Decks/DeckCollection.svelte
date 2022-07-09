<script lang="ts">
	import type { CardDeck } from '$lib/types/types';
	import Deck from './Deck.svelte';

	export let decks: CardDeck[];
</script>

<div class="card-actions gap-5 justify-center my-8">
	{#each decks as deck (deck.id)}
		<Deck {deck} on:click />
	{/each}
</div>
