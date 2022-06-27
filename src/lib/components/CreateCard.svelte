<script lang="ts">
	import { cards } from '$lib/stores/cards';
	import type { Card } from '$lib/types/types';
	import { Status } from '$lib/types/types';

	let question = '';
	let solution = '';

	function handleCreateAnother() {
		if (question === '') return;
		if (solution === '') return;

		let newCard: Card = {
			id: Date.now() + Math.random(),
			question,
			solution,
			status: Status.NotAssigned
		};

		cards.update((cards) => {
			console.log(cards);
			return [...cards, newCard];
		});

		question = '';
		solution = '';
	}

	function handleCancel() {
		return;
	}
</script>

<!-- The button to open modal -->
<label for="create-card-modal" class="btn modal-button">open modal</label>

<input type="checkbox" id="create-card-modal" class="modal-toggle" />
<div class="modal modal-bottom sm:modal-middle">
	<div class="modal-box">
		<form on:submit|preventDefault={handleCreateAnother} class="form-control">
			<label class="flex flex-col font-bold gap-2 label-text">
				Enter your question
				<textarea
					class="textarea textarea-bordered font-mono font-normal h-24 mb-4"
					placeholder="Your question goes here ..."
					bind:value={question}
				/>
			</label>
			<label class="flex flex-col font-bold gap-2 label-text">
				Enter your Solution
				<textarea
					class="textarea textarea-bordered font-mono font-normal h-24"
					placeholder="And your solution goes here ..."
					bind:value={solution}
				/>
			</label>
			<div class="modal-action">
				<label on:click={handleCancel} for="create-card-modal" class="btn btn-outline justify-start"
					>Cancel</label
				>
				<label for="create-card-modal" class="btn btn-outline justify-start">Create</label>
				<button class="btn justify-start" type="submit" on:click={handleCreateAnother}
					>Create Another</button
				>
			</div>
		</form>
	</div>
</div>
