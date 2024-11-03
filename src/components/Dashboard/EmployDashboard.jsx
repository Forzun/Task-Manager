import React from 'react'
import Header from '../other/Header'
import TaskListNumber from '../other/TaskListNumber'
import TaskList from '../taskList/TaskList'

const EmployDashboard = (props) => {

  return (
   <div className='p-12 bg-[#191919] h-screen w-full '>
        <Header changeUser={props.changeUser} data={props.data}/>
        <TaskListNumber data={props.data}/>
        <TaskList data={props.data}/>
   </div>
  )
}

export default EmployDashboard 