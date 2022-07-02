<script lang="ts">
	import TrashIcon from '$lib/assets/icons/TrashIcon.svelte';
	import type { Card } from '$lib/types/types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();

	export let flipCard: Card;
	export let isFlipped = false;
	let cardTitle: string;
	let cardContent: string;

	$: if (flipCard) cardTitle = !isFlipped ? 'Question' : 'Solution';
	$: if (flipCard) cardContent = !isFlipped ? flipCard.question : flipCard.solution;
</script>

{#if flipCard}
	<div class="card bg-base-100 border my-6">
		<div class="card-body flex gap-5">
			<h2 class="card-title">{cardTitle}</h2>
			<p class="font-mono">{cardContent}</p>
			<div class="card-actions justify-start">
				{#if !isFlipped}
					<button on:click={() => dispatch('flip')} class="btn btn-outline">Check Solution</button>
				{:else}
					<button
						on:click={() => dispatch('status-difficult')}
						class="btn btn-outline btn-error w-full sm:w-32"
						>Difficult
					</button>
					<button
						on:click={() => dispatch('status-just-fine')}
						class="btn btn-outline w-full sm:w-32">Just Fine</button
					>
					<button
						on:click={() => dispatch('status-easy')}
						class="btn btn-outline btn-success w-full sm:w-32">Easy</button
					>
				{/if}
				<button on:click={() => dispatch('delete')} class="btn btn-ghost ml-auto">
					<TrashIcon />
				</button>
			</div>
		</div>
	</div>
{/if}
