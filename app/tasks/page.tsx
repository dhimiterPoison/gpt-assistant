'use client'
import DragAndDropHandle from '@/components/ui/DragAndDropHandle';
import { TaskContainerInterface, TaskInterface } from '@/lib/interfaces';
import { GripVertical } from 'lucide-react';
import React, { ReactNode } from 'react';
import Draggable from 'react-draggable';



const arrayToSort: TaskInterface[] = [
  {
    id: 1,
    task: 'Task 1',
    status: 'Pending',
    impact: 1,
    ease: 3,
    quest: 'main'
  },
  {
    id: 2,
    task: 'Task 2',
    status: 'Pending',
    impact: 2,
    ease: 1,
    quest: 'main'
  },
  {
    id: 3,
    task: 'Task 3',
    status: 'Pending',
    impact: 3,
    ease: 2,
    quest: 'main'
  },
  {
    id: 4,
    task: 'Task 4',
    status: 'Pending',
    impact: 2,
    ease: 3,
    quest: 'main'
  },
];

export const colors = [
  "",
  "gray",
  "cyan",
  "green",
];

const sorted = arrayToSort.sort((a, b) => b.impact - a.impact || b.ease - a.ease);
const TasksPage = () => {

  console.log(sorted);


  return (
    <div className='flex w-full gap-4'>
      <div className='task-list w-full md:w-1/2 flex flex-col gap-2'>
        <div className='w-full grid grid-cols-[auto_1fr_min(4rem)_min(4rem)] items-center px-2 text-sm text-blue-950' >
          <div className='w-10'></div>
          <div className="name grow px-2 ">Description</div>
          <div className={`impact shrink-0 px-4 flex justify-center`}>Impact</div>
          <div className="ease shrink-0 px-4 flex justify-center">Ease</div>
        </div>
        <TaskContainer variant='main'>
          {sorted.map((task: TaskInterface) => {
            console.log('Task', task);
            return <Task key={task.id} {...task}></Task>
          })}
        </TaskContainer>
        <TaskContainer variant='side'>
          {sorted.map((task: TaskInterface) => {
            console.log('Task', task);
            return <Task key={task.id} {...task}></Task>
          })}
        </TaskContainer>
        <TaskContainer variant='other'>
          {sorted.map((task: TaskInterface) => {
            console.log('Task', task);
            return <Task key={task.id} {...task}></Task>
          })}
        </TaskContainer>
      </div>
      <div className='task-list w-full md:w-1/2 flex flex-col gap-2'>
        {/* <h1 className='text-lg font-medium'>Calendar</h1> */}
        <p>If it is not on the calendar it does not exist. <br />
          Let&apos;s take a moment to review your routine</p>
        <div className='h-full max-h-screen w-full bg-slate-100 flex items-center justify-center'>calendar here</div>
      </div>
    </div>
  )
}

export default TasksPage;



export const EffortDot = ({ value, children }: { value: number, children: ReactNode }) => {
  console.log('EffortDot', { value, color: colors[value] })
  const color = colors[value];
  return <div className={`${color}-dot w-6 h-6 rounded-full text-center`}>
    {children}
  </div>
}

export function TaskContainer({ variant, children }: Readonly<TaskContainerInterface>) {
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


export function Task(task: Readonly<TaskInterface>) {

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