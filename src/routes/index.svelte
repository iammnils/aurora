<script lang="ts">
	import CreateFlipCard from '$lib/components/FlipCard/CreateFlipCard.svelte';

	import FlipCard from '$lib/components/FlipCard/FlipCard.svelte';
	import RemainingFlipCards from '$lib/components/FlipCard/CardIndicator.svelte';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import ToastList from '$lib/components/Toast/ToastList.svelte';
	import { flipCardStore } from '$lib/stores/flipCardStore';
	import { deleteFlipCard } from '$lib/stores/flipCardStore';
	import { addToast } from '$lib/stores/toastStore';
	import { ToastType } from '$lib/types/types';
	import { generateId } from '$lib/utils/generateId';

	let isFlipped = false;
	let currentCardIndex = 0;
	$: displayedCard = $flipCardStore[currentCardIndex];
	$: flipCards = $flipCardStore;

	function flip(): void {
		isFlipped = !isFlipped;
	}

	function handleDelete(id: number) {
		deleteFlipCard(id);
		isFlipped = false;
		if (currentCardIndex !== 0) {
			currentCardIndex--;
		}
	}

	function handleCardStatusChange(e: Event) {
		console.log(e);

		if (currentCardIndex === $flipCardStore.length - 1) {
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
		currentCardIndex++;
	}
</script>

<svelte:head>
	<title>aurora</title>
</svelte:head>

<div class="flex flex-col content-between w-full lg:w-2/4 md:w-3/4 sm:w-full px-5 py-5 h-screen">
	<Navbar>
		<CreateFlipCard />
	</Navbar>
	<FlipCard
		flipCard={displayedCard}
		{isFlipped}
		on:flip={() => flip()}
		on:status-difficult={(e) => handleCardStatusChange(e)}
		on:status-just-fine={(e) => handleCardStatusChange(e)}
		on:status-easy={(e) => handleCardStatusChange(e)}
		on:delete={() => handleDelete(displayedCard.id)}
	/>
	<RemainingFlipCards {flipCards} {displayedCard} />
</div>

<ToastList />
