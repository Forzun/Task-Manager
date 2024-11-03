import React from 'react'

const TaskListNumber = ({data}) => {

  return (
    <div className='flex gap-10 w-full mt-10 '>
        <div className='h-40 w-[25%] px-9 py-6 rounded-xl bg-[#558B70] '>
            <h2 className='text-3xl text-slate-200 mb-4'>{data.taskNumbers.active}</h2>
            <h3 className='text-2xl font-medium text-slate-200  '>New Task</h3>
        </div>
        <div className='h-40 w-[25%] px-9 py-6 rounded-xl bg-[#5D5C99]	'>
            <h2 className='text-3xl mb-4'>{data.taskNumbers.complete}</h2>
            <h3 className='text-2xl font-semibold text-slate-200 '>Complete Task</h3>
        </div>
        <div className='h-40 w-[25%] px-9 py-6 rounded-xl bg-[#5C4F4F] '>
            <h2 className='text-3xl mb-4'>{data.taskNumbers.failed}</h2>
            <h3 className='text-2xl font-medium text-slate-200 '>Failed Task</h3>
        </div>
        <div className='h-40 w-[25%] px-9 py-6 rounded-xl bg-[#4f515c] '>
            <h2 className='text-3xl mb-4'>{data.taskNumbers.newTask}</h2>
            <h3 className='text-2xl font-medium text-slate-200 '>New Task</h3>
        </div>
    </div>
  )
} 

export default TaskListNumber; 