import type { Toast } from '$lib/types/types';
import { writable } from 'svelte/store';

export const toastStore = writable<Toast[]>([]);

export function dismissToast(id: number) {
	toastStore.update((all) => all.filter((t: Toast) => t.id !== id));
}

export function addToast(toast: Toast) {
	const t: Toast = { ...toast };
	const id = toast.id;

	toastStore.update((all) => [...all, t]);

	if (t.timeout) setTimeout(() => dismissToast(id), t.timeout);
}
