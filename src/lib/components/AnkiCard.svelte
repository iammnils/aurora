<script lang="ts">
	import TrashIcon from '$lib/assets/icons/TrashIcon.svelte';
	import { cardStore } from '$lib/stores/cardStore';
	import type { Card } from '$lib/types/types';

	export let card: Card;
	let flipped = false;

	function flipCard(): void {
		flipped = !flipped;
	}

	function deleteCard(currentCard: Card): void {
		cardStore.update((storedValue) => {
			return storedValue.filter((card) => card !== currentCard);
		});
		flipped = false;
	}
</script>

{#if card}
	<div class="card bg-base-100 border my-6">
		<div class="card-body flex gap-5">
			{#if !flipped}
				<h2 class="card-title">Question</h2>
				<p class="font-mono">{card.question}</p>
				<div class="card-actions justify-start">
					<button on:click={flipCard} class="btn btn-outline">Check Solution</button>
					<button on:click={() => deleteCard(card)} class="btn btn-ghost ml-auto">
						<TrashIcon />
					</button>
				</div>
			{:else}
				<h2 class="card-title">Solution</h2>
				<p class="font-mono">{card.solution}</p>
				<div class="card-actions justify-start">
					<button on:click={flipCard} class="btn btn-outline btn-warning w-full sm:w-32"
						>Difficult
					</button>
					<button on:click={flipCard} class="btn btn-outline w-full sm:w-32">Just Fine</button>
					<button on:click={flipCard} class="btn btn-outline btn-success w-full sm:w-32"
						>Easy</button
					>
					<button on:click={() => deleteCard(card)} class="btn btn-ghost sm:ml-auto">
						<TrashIcon />
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}
