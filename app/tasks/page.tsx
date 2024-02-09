'use client'
import { TaskInterface } from '@/lib/interfaces';
import { arrayToSort } from '@/lib/mockdata';
import Task from './Task';
import TaskContainer from './TaskContainer';

const sorted = arrayToSort.toSorted((a, b) => b.impact - a.impact || b.ease - a.ease);
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