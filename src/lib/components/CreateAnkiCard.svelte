<script lang="ts">
	import PlusIcon from '$lib/assets/icons/PlusIcon.svelte';
	import { cardStore } from '$lib/stores/cardStore';
	import type { Card } from '$lib/types/types';
	import { CardStatus } from '$lib/types/types';

	let question = '';
	let solution = '';

	function handleCreate() {
		if (question === '') return alert('Please fill in a question.');
		if (solution === '') return alert('Please fill in a solution.');

		let newCard: Card = {
			id: Date.now() + Math.random(),
			question,
			solution,
			status: CardStatus.NotAssigned
		};

		cardStore.update((cards) => {
			return [...cards, newCard];
		});

		question = '';
		solution = '';
	}

	function handleCancel() {
		return;
	}
</script>

<label for="create-card-modal" class="btn btn-ghost" role="button"><PlusIcon /></label>

<input type="checkbox" id="create-card-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<form on:submit|preventDefault class="form-control">
			<label class="flex flex-col font-bold gap-2 label-text">
				Enter your question
				<textarea
					class="textarea textarea-bordered font-mono font-normal h-24 mb-4"
					placeholder="Your question goes here ..."
					required
					bind:value={question}
				/>
			</label>
			<label class="flex flex-col font-bold gap-2 label-text">
				Enter your Solution
				<textarea
					class="textarea textarea-bordered font-mono font-normal h-24"
					placeholder="And your solution goes here ..."
					required
					bind:value={solution}
				/>
			</label>
			<div class="modal-action">
				<label
					for="create-card-modal"
					role="button"
					class="btn btn-outline justify-start"
					on:click={handleCancel}
				>
					Cancel
				</label>
				<button class="btn justify-start" type="submit" on:click={handleCreate}>Create </button>
			</div>
		</form>
	</div>
</div>
