export type Card = {
	id: number;
	question: string;
	solution: string;
	status: CardStatus;
};

export enum CardStatus {
	NotAssigned = 'NOT ASSIGNED',
	Difficult = 'DIFFICULT',
	JustFine = 'JUST FINE',
	Easy = 'EASY'
}
