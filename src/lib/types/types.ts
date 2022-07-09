export type Card = {
	id: string;
	question: string;
	solution: string;
	deckSelectionId: string;
	status: CardStatus;
};

export enum CardStatus {
	NotAssigned = 'NOT ASSIGNED',
	Difficult = 'DIFFICULT',
	JustFine = 'JUST FINE',
	Easy = 'EASY'
}

export type Toast = {
	id: string;
	message: string;
	type: ToastType;
	dismissible: boolean;
	timeout: number;
};

export enum ToastType {
	Success = 'SUCCESS',
	Info = 'INFO',
	Error = 'WARNING'
}

export type CardDeck = {
	id: string;
	title: string;
};
