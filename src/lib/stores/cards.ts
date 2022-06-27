import { writable } from 'svelte/store';
import type { Card } from '$lib/types/types';

export const cards = writable<Card[]>([]);
