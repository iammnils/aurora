import type { CardDeck } from '$lib/types/types';
import { writable } from 'svelte/store';

export const deckStore = writable<CardDeck[]>([
	{
		id: 'default',
		title: 'Default'
	}
]);

export function addDeck(deck: CardDeck) {
	deckStore.update((all) => [...all, deck]);
}

export function deleteDeck(id: string) {
	deckStore.update((all) => all.filter((d) => d.id !== id));
}
