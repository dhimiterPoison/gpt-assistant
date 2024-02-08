'use client'
import { GripVertical } from 'lucide-react'
import React from 'react'

const DragAndDropHandle = ({} : {
	// dragStart: (e:React.DragEvent<HTMLDivElement>) => void
}) => {

  	return (
		<div className='drag-handle cursor-pointer hover:bg-slate-200 p-1 rounded-sm '
		>
			<GripVertical className='text-slate-500' />
		</div>
	)
}

export default DragAndDropHandle