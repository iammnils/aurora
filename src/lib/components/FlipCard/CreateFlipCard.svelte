<script lang="ts">
	import PlusIcon from '$lib/assets/icons/PlusIcon.svelte';
	import { addFlipCard } from '$lib/stores/flipCardStore';
	import { CardStatus, ToastType } from '$lib/types/types';
	import { addToast } from '$lib/stores/toastStore';
	import { generateId } from '$lib/utils/generateId';

	let question: string;
	let solution: string;

	function clearForm() {
		question = '';
		solution = '';
	}

	function handleCreate() {
		if (!question || !solution) {
			addToast({
				id: generateId(),
				message: 'Please fill-in the all fields!',
				type: ToastType.Error,
				dismissible: true,
				timeout: 2500
			});
			return;
		}

		addFlipCard({ id: generateId(), question, solution, status: CardStatus.NotAssigned });
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
