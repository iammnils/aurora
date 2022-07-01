<script lang="ts">
	import { createEventDispatcher } from 'svelte';
	import { fade } from 'svelte/transition';
	import ErrorIcon from '$lib/assets/icons/ErrorIcon.svelte';
	import InfoIcon from '$lib/assets/icons/InfoIcon.svelte';
	import SuccessIcon from '$lib/assets/icons/SuccessIcon.svelte';
	import CloseIcon from '$lib/assets/icons/CloseIcon.svelte';

	import { ToastType } from '$lib/types/types';

	const dispatch = createEventDispatcher();

	export let type: ToastType;
	export let message: string;
	export let dismissible: boolean;
</script>

<div
	class="alert sm:flex-row shadow-lg sm:gap-8 max-w-sm"
	class:alert-error={type === ToastType.Error}
	class:alert-info={type === ToastType.Info}
	class:alert-success={type === ToastType.Success}
	role="alert"
	transition:fade={{ duration: 100 }}
>
	<div class="flex sm:justify-start justify-center w-full">
		{#if type === ToastType.Error}
			<ErrorIcon />
		{:else if type === ToastType.Success}
			<SuccessIcon />
		{:else}
			<InfoIcon />
		{/if}
		{message}
	</div>
	{#if dismissible}
		<button class="flex justify-center w-full sm:w-auto" on:click={() => dispatch('dismiss')}>
			<CloseIcon />
		</button>
	{/if}
</div>
