export type Card = {
	id: number;
	question: string;
	solution: string;
	status: Status;
};

export enum Status {
	NotAssigned = 'NOT ASSIGNED',
	Difficult = 'DIFFICULT',
	JustFine = 'JUST FINE',
	Easy = 'EASY'
}
