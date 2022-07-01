<script lang="ts">
	import Toast from './Toast.svelte';

	import { dismissToast, toastStore } from '$lib/stores/toastStore';
</script>

{#if $toastStore}
	<section class="fixed top-0 right-0 mt-4 mr-4 flex gap-2 justify-center flex-col z-50">
		{#each $toastStore as toast (toast.id)}
			<Toast
				message={toast.message}
				type={toast.type}
				dismissible={toast.dismissible}
				on:dismiss={() => dismissToast(toast.id)}
			/>
		{/each}
	</section>
{/if}
