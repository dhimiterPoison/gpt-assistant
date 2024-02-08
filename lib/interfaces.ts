export interface TaskContainerInterface {
	variant: 'main' | 'side' | 'other';
	children: React.ReactNode;
}
export interface TaskInterface {
	id: number;
	task: string;
	status: string;
	impact: 1 | 2 | 3;
	ease: 1 | 2 | 3;
	quest: TaskContainerInterface['variant'];
}
