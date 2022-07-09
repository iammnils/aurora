<script lang="ts">
	import PlusIcon from '$lib/assets/icons/PlusIcon.svelte';
	import { addFlipCard } from '$lib/stores/flipCardStore';
	import { CardStatus, ToastType, type CardDeck } from '$lib/types/types';
	import { addToast } from '$lib/stores/toastStore';
	import { generateId } from '$lib/utils/generateId';

	let question: string;
	let solution: string;
	let deckSelectionId: string;
	export let decks: CardDeck[];

	function clearForm() {
		question = '';
		solution = '';
	}

	function handleCreate() {
		if (!question || !solution || !deckSelectionId) {
			addToast({
				id: generateId(),
				message: 'Please fill-in the all fields!',
				type: ToastType.Error,
				dismissible: true,
				timeout: 2500
			});
			return;
		}

		addFlipCard({
			id: generateId(),
			question,
			solution,
			deckSelectionId,
			status: CardStatus.NotAssigned
		});
		clearForm();
		addToast({
			id: generateId(),
			message: 'Card successfully created!',
			type: ToastType.Success,
			dismissible: true,
			timeout: 2500
		});
	}
</script>

<label for="create-card-modal" class="btn btn-ghost" role="button"><PlusIcon /></label>

<input type="checkbox" id="create-card-modal" class="modal-toggle" />
<div class="modal z-40 modal-bottom sm:modal-middle">
	<div class="modal-box">
		<form on:submit|preventDefault class="form-control">
			<label class="flex flex-col font-bold gap-2 label-text">
				Question
				<textarea
					class="textarea textarea-bordered font-mono font-normal h-24 mb-4"
					placeholder="What is a Singleton Pattern?"
					bind:value={question}
				/>
			</label>
			<label class="flex flex-col font-bold gap-2 label-text">
				Solution
				<textarea
					class="textarea textarea-bordered font-mono font-normal h-24 mb-4"
					placeholder="Singleton is a design pattern that ensures that a class has only one immutable instance."
					bind:value={solution}
				/>
			</label>
			<label class="flex flex-col font-bold gap-2 label-text">
				Select a deck
				<select class="select select-bordered font-mono font-normal" bind:value={deckSelectionId}>
					{#each decks as deck (deck.id)}
						<option value={deck.id}>{deck.title}</option>
					{/each}}
				</select>
			</label>
			<div class="modal-action">
				<label
					for="create-card-modal"
					role="button"
					class="btn btn-outline justify-start"
					on:click={clearForm}
				>
					Cancel
				</label>
				<button class="btn btn-accent justify-start" type="submit" on:click={handleCreate}
					>Create</button
				>
			</div>
		</form>
	</div>
</div>
