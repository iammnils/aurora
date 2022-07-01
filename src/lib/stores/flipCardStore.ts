import { CardStatus, type Card } from '$lib/types/types';
import { writable } from 'svelte/store';

export const flipCardStore = writable<Card[]>([
	{
		id: Date.now() + Math.random(),
		question: 'What is going on?',
		solution: 'Nothing, but the finest!',
		status: CardStatus.NotAssigned
	}
]);

export function addFlipCard(flipCard: Card) {
	flipCardStore.update((all) => [...all, flipCard]);
}

export function deleteFlipCard(id: number): void {
	flipCardStore.update((all) => all.filter((c) => c.id !== id));
}
