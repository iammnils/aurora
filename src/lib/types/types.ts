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

export type Toast = {
	id: number;
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
