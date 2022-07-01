<script lang="ts">
	import TrashIcon from '$lib/assets/icons/TrashIcon.svelte';
	import type { Card } from '$lib/types/types';
	import { createEventDispatcher } from 'svelte';

	const dispatch = createEventDispatcher();
	export let flipCard: Card;
	export let isFlipped = false;
</script>

{#if flipCard}
	<div class="card bg-base-100 border my-6">
		<div class="card-body flex gap-5">
			{#if !isFlipped}
				<h2 class="card-title">Question</h2>
				<p class="font-mono">{flipCard.question}</p>
				<div class="card-actions justify-start">
					<button on:click={() => dispatch('flip')} class="btn btn-outline">Check Solution</button>
					<button on:click={() => dispatch('delete')} class="btn btn-ghost ml-auto">
						<TrashIcon />
					</button>
				</div>
			{:else}
				<h2 class="card-title">Solution</h2>
				<p class="font-mono">{flipCard.solution}</p>
				<div class="card-actions justify-start">
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
					<button on:click={() => dispatch('delete')} class="btn btn-ghost sm:ml-auto">
						<TrashIcon />
					</button>
				</div>
			{/if}
		</div>
	</div>
{/if}
