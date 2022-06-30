import { CardStatus, type Card } from '$lib/types/types';
import { writable } from 'svelte/store';

export const cardStore = writable<Card[]>([
	{
		id: Date.now() + Math.random(),
		question: 'What is going on?',
		solution: 'Nothing, but the finest!',
		status: CardStatus.NotAssigned
	}
]);
