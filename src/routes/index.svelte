<script lang="ts">
	import AnkiCard from '$lib/components/AnkiCard.svelte';
	import Navbar from '$lib/components/Navbar.svelte';
	import { cardStore } from '$lib/stores/cardStore';
	import type { Card } from '$lib/types/types';

	let card: Card;
	let cards: Card[];

	cardStore.subscribe((storedValue) => {
		cards = storedValue;
		card = cards[0];
	});
</script>

<Navbar />
<AnkiCard {card} />
