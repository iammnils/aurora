<script lang="ts">
	import TrashIcon from '$lib/assets/icons/TrashIcon.svelte';

	let flipped = false;
	export let question = 'What does aurora mean?';
	export let solution =
		'A luminous phenomenon that consists of streamers or arches of light appearing in the upper atmosphere of a planet`s magnetic polar regions.';

	function flipCard(): void {
		flipped = !flipped;
	}
</script>

<div class="card bg-base-100 border my-6">
	<div class="card-body flex gap-5">
		{#if !flipped}
			<h2 class="card-title">Question</h2>
			<p class="font-mono">{question}</p>
			<div class="card-actions justify-start">
				<button on:click={flipCard} class="btn btn-outline">Check Solution</button>
				<button on:click={flipCard} class="btn btn-ghost ml-auto">
					<TrashIcon />
				</button>
			</div>
		{:else}
			<h2 class="card-title">Solution</h2>
			<p class="font-mono">{solution}</p>
			<div class="card-actions justify-start">
				<button on:click={flipCard} class="btn btn-outline btn-warning w-full sm:w-32"
					>Difficult
				</button>
				<button on:click={flipCard} class="btn btn-outline w-full sm:w-32">Just Fine</button>
				<button on:click={flipCard} class="btn btn-outline btn-success w-full sm:w-32">Easy</button>
				<button on:click={flipCard} class="btn btn-ghost sm:ml-auto">
					<TrashIcon />
				</button>
			</div>
		{/if}
	</div>
</div>
