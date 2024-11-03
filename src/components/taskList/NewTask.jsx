import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className='h-full w-[300px] bg-[#2B2B2B] p-5 rounded-xl flex-shrink-0 '>
    <div className="flex justify-between items-center ">
        <h3 className='bg-red-600 cursor-pointer text-sm font-semibold px-3 py-1 rounded-md'>{data.tasks[1].category}</h3>
        <h4 className='text-base font-medium'>{data.tasks[1].date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.tasks[1].title}</h2>
    <p className='text-md mt-5 font-normal'>
        {data.tasks[1].description}
    </p>
    <div className='flex justify-between mt-4'>
        <button className='bg-green-500 px-3 py-1 text-sm rounded-md text-zinc-700 font-semibold'>Accept task</button>
    </div>
</div>
  )
}

export default NewTask