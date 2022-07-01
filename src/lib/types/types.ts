export type Card = {
	id: number;
	question: string;
	solution: string;
	status: CardStatus;
};

export enum CardStatus {
	NotAssigned = 'not assigned',
	Difficult = 'difficult',
	JustFine = 'just fine',
	Easy = 'easy'
}

export type Toast = {
	id: number;
	message: string;
	type: ToastType;
	dismissible: boolean;
	timeout: number;
};

export enum ToastType {
	Success = 'success',
	Info = 'info',
	Error = 'warning'
}
