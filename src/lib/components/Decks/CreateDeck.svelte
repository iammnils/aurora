<script lang="ts">
	import { ToastType } from '$lib/types/types';
	import { addToast } from '$lib/stores/toastStore';
	import { generateId } from '$lib/utils/generateId';
	import { addDeck } from '$lib/stores/deckStore';
	import PlusDeckIcon from '$lib/assets/icons/PlusDeckIcon.svelte';

	let title: string;

	function clearForm() {
		title = '';
	}

	function handleCreate() {
		if (!title) {
			addToast({
				id: generateId(),
				message: 'Please fill-in the title!',
				type: ToastType.Error,
				dismissible: true,
				timeout: 2500
			});
			return;
		}

		addDeck({ id: generateId(), title });
		clearForm();
		addToast({
			id: generateId(),
			message: 'Deck successfully created!',
			type: ToastType.Success,
			dismissible: true,
			timeout: 2500
		});
	}
</script>

<label for="create-deck-modal" class="btn btn-ghost" role="button"><PlusDeckIcon /></label>

<input type="checkbox" id="create-deck-modal" class="modal-toggle" />
<div class="modal z-40 modal-bottom sm:modal-middle">
	<div class="modal-box">
		<form on:submit|preventDefault class="form-control">
			<label class="flex flex-col font-bold gap-2 label-text">
				Deck name
				<input
					class="input input-bordered font-mono font-normal"
					placeholder="JavaScript Design Patterns ..."
					maxlength="30"
					bind:value={title}
				/>
			</label>
			<div class="modal-action">
				<label
					for="create-deck-modal"
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
