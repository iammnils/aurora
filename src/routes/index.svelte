<script lang="ts">
	import CreateFlipCard from '$lib/components/FlipCard/CreateFlipCard.svelte';

	import FlipCard from '$lib/components/FlipCard/FlipCard.svelte';
	import Navbar from '$lib/components/Navbar/Navbar.svelte';
	import ToastList from '$lib/components/Toast/ToastList.svelte';
	import { flipCardStore } from '$lib/stores/flipCardStore';
	import type { Card } from '$lib/types/types';

	let flipCard: Card;

	flipCardStore.subscribe((all) => {
		flipCard = all[0];
	});
</script>

<svelte:head>
	<title>aurora</title>
</svelte:head>

<div class="flex flex-col content-between w-full lg:w-2/4 md:w-3/4 sm:w-full px-5 py-5 h-screen">
	<Navbar>
		<CreateFlipCard />
	</Navbar>
	<FlipCard {flipCard} />
</div>

<ToastList />
