import { TaskContainerInterface } from '@/lib/interfaces';
import React from 'react'

const TaskContainer = ({ variant, children }: Readonly<TaskContainerInterface>) => {
	let color;
	switch (variant) {
		case 'main':
			color = 'bg-green-300'; break;
		case 'side':
			color = 'bg-blue-300'; break;
		case 'other':
			color = 'bg-slate-300';
	}
	return <div className={`flex flex-col gap-2 ${color} p-2 rounded-lg`}>
		<h3 className='font-medium text-sm capitalize'>
			{variant} quest
		</h3>
		{children}
	</div>
}

export default TaskContainer