import React from 'react'

const CompleteTask = ({data}) => {
  return (
<div
  id="taskList"
  className="h-[55%] w-full py-5 mt-10 overflow-auto flex items-center justify-start gap-5 flex-nowrap"
>
  {data.tasks.map((item, index) => {
    return (
      <div key={index} className="flex items-center gap-5">
        {item.active ? (
          <AcceptTask data={data} />
        ) : item.newTask ? (
          <NewTask data={data} />
        ) : item.failed ? (
          <FaildTask data={data} />
        ) : item.complete ? (
          <CompleteTask data={data} />
        ) : null}
      </div>
    );
  })}
</div>
  )
}

export default CompleteTask