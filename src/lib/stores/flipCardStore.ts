import { CardStatus, type Card } from '$lib/types/types';
import { generateId } from '$lib/utils/generateId';
import { writable } from 'svelte/store';

export const flipCardStore = writable<Card[]>([
	{
		id: generateId(),
		question: 'What is going on?',
		solution: 'Nothing, but the finest!',
		deckSelectionId: 'default',
		status: CardStatus.NotAssigned
	}
]);

export function addFlipCard(flipCard: Card) {
	flipCardStore.update((all) => [...all, flipCard]);
}

export function deleteFlipCard(id: string) {
	flipCardStore.update((all) => all.filter((c) => c.id !== id));
}
