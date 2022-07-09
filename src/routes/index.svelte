<script lang="ts">
	import { goto } from '$app/navigation';

	import CreateDeck from '$lib/components/Decks/CreateDeck.svelte';
	import DeckCollection from '$lib/components/Decks/DeckCollection.svelte';
	import CreateFlipCard from '$lib/components/FlipCard/CreateFlipCard.svelte';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import { deckStore } from '$lib/stores/deckStore';

	function handleDeckSelection(e: Event) {
		const target = e.target as HTMLButtonElement;
		goto(`deck/${target.id}`);
	}
</script>

<svelte:head>
	<title>aurora</title>
</svelte:head>

<Navbar>
	<CreateDeck slot="slot-2-left" />
	<CreateFlipCard decks={$deckStore} slot="slot-1-right" />
</Navbar>
<DeckCollection decks={$deckStore} on:click={(e) => handleDeckSelection(e)} />
