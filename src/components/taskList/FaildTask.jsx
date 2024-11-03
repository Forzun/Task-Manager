import React from 'react'

const FaildTask = ({data}) => {
  return (
    <div className='h-full w-[300px] bg-[#2B2B2B] p-5 rounded-xl flex-shrink-0 '>
    <div className="flex justify-between items-center ">
        <h3 className='bg-red-600 text-sm font-semibold px-3 py-1 rounded-md'>{data.tasks[1].failed}</h3>
        <h4 className='text-base font-medium'>{data.tasks[0].date}</h4>
    </div>
    <h2 className='mt-5 text-2xl font-semibold'>{data.tasks[0].title}</h2>
    <p className='text-md mt-5 font-normal'>
        {data.tasks[0].description}
    </p>
    <div className='mt-3 '>
        <button className='bg-red-500 py-1 px-3 text-sm rounded-md'>Faild</button>
    </div>
</div>
  )
}

export default FaildTask