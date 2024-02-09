import DragAndDropHandle from '@/components/ui/DragAndDropHandle'
import { TaskInterface } from '@/lib/interfaces'
import React from 'react'
import Draggable from 'react-draggable'
import { EffortDot } from './EffortDot'

const Task = (task: Readonly<TaskInterface>) => {

	return <Draggable
		key={task.id}
		axis="y"
		handle='.drag-handle'
		// position={null}
		grid={[25, 25]}
		scale={1}
	// onStart={handleStart}
	// onDrag={handleDrag}
	// onStop={handleStop}
	>
		<div
			className='task h-10 w-full bg-white shadow-sm rounded-md grid grid-cols-[auto_1fr_min(4rem)_min(4rem)] grid-rows-1 items-center px-2 text-blue-950'
		>
			<DragAndDropHandle />
			<div className="name grow px-2 text-sm">{task.task}</div>
			<div className={`impact ease shrink-0 px-4 rounded-full flex justify-center`}><EffortDot value={task.impact}>{task.impact}</EffortDot></div>
			<div className="ease ease shrink-0 px-4 rounded-full flex justify-center"><EffortDot value={task.ease}>{task.ease}</EffortDot></div>
		</div>
	</Draggable>
}

export default Task