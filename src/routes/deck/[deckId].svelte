<script lang="ts">
	import CreateDeck from '$lib/components/Decks/CreateDeck.svelte';
	import CreateFlipCard from '$lib/components/FlipCard/CreateFlipCard.svelte';
	import FlipCard from '$lib/components/FlipCard/FlipCard.svelte';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import RemainingFlipCards from '$lib/components/FlipCard/CardIndicator.svelte';
	import { flipCardStore } from '$lib/stores/flipCardStore';
	import { deleteFlipCard } from '$lib/stores/flipCardStore';
	import { addToast } from '$lib/stores/toastStore';
	import { deckStore } from '$lib/stores/deckStore';
	import { page } from '$app/stores';
	import { ToastType } from '$lib/types/types';
	import { generateId } from '$lib/utils/generateId';

	const deckId = $page.params.deckId;

	let isFlipped = false;
	let currentCardIndex = 0;

	$: filteredCards = $flipCardStore.filter((c) => c.deckSelectionId === deckId);
	$: displayedCard = filteredCards[currentCardIndex];

	function flip(): void {
		isFlipped = !isFlipped;
	}

	function handleDelete(id: string) {
		deleteFlipCard(id);
		isFlipped = false;
		if (currentCardIndex !== 0) {
			currentCardIndex--;
		}
		addToast({
			id: generateId(),
			message: 'Card deleted!',
			type: ToastType.Info,
			dismissible: true,
			timeout: 2500
		});
	}

	function handleCardStatusChange(e: Event) {
		console.log(e);

		if (currentCardIndex === filteredCards.length - 1) {
			addToast({
				id: generateId(),
				message: 'Deck end reached!',
				type: ToastType.Info,
				dismissible: true,
				timeout: 2500
			});
			flip();

			return;
		}
		flip();
		currentCardIndex++;
	}
</script>

<svelte:head>
	<title>aurora</title>
</svelte:head>

<Navbar>
	<CreateDeck slot="slot-2-left" />
	<CreateFlipCard decks={$deckStore} slot="slot-1-right" />
</Navbar>
<RemainingFlipCards flipCards={filteredCards} {displayedCard} />
<FlipCard
	flipCard={displayedCard}
	{isFlipped}
	on:flip={() => flip()}
	on:status-difficult={(e) => handleCardStatusChange(e)}
	on:status-just-fine={(e) => handleCardStatusChange(e)}
	on:status-easy={(e) => handleCardStatusChange(e)}
	on:delete={() => handleDelete(displayedCard.id)}
/>
