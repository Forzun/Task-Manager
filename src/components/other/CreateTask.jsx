import React, { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthProvide";

const CreateTask = () => {

  const [userData , setuserData] = useContext(AuthContext); 

  const [taskTitle, settaskTitle] = useState("");
  const [taskDescription, settaskDescription] = useState("");
  const [taskDate, settaskDate] = useState("");
  const [assignTo, setassignTo] = useState("");
  const [category, setcategory] = useState("");

  const [task, setTask] = useState([])

  const submitHandler = (e) => {
    e.preventDefault();

    setTask({title:taskTitle , description:taskDescription , category:category , date:taskDate , complete:false , active:true , failed:false , newTask:true });

    const data = userData;
    console.log(userData)

    data.forEach(element => {
        if(assignTo === element.name){
          element.tasks.push(task);
        }
    });
    
    // setuserData(data)
    console.log(task);

    // settaskTitle("");
    // settaskDescription("")
    // settaskDate(""); 
    // setassignTo("");
    // setcategory("");
  };

  return (
    <div className="w-full mt-10">
      <form
        onSubmit={(e) => submitHandler(e)}
        className="w-full flex items-start justify-between rounded-md bg-[#191919]"
      >
        <div className="w-1/2 flex flex-col p-10 pb-20 ">
          <div>
            <h3 className="text-md font-semibold text-zinc-300 ">Task Title</h3>
            <input
              value={taskTitle}
              onChange={(e) => settaskTitle(e.target.value)}
              className="w-4/5 rounded-md px-3 py-1 border-[1px] border-gray-400 bg-transparent focus-ring-1 placeholder-gray-400 text-gray-100 "
              type="text"
              placeholder="Make a UI design"
            />
          </div>
          <div>
            <h3 className="text-md font-semibold text-zinc-300 mt-2">Data</h3>
            <input
              value={taskDate}
              onChange={(e) => settaskDate(e.target.value)}
              className="w-4/5 rounded-md px-3 py-1 border-[1px] border-gray-400 bg-transparent focus-ring-2 placeholder-gray-500 "
              type="date"
              name=""
              id=""
            />
          </div>
          <div>
            <h3 className="text-md font-semibold text-zinc-300 mt-2">
              Assign to{" "}
            </h3>
            <input
              value={assignTo}
              onChange={(e) => setassignTo(e.target.value)}
              className="w-4/5 rounded-md px-3 py-1 border-[1px] border-gray-400 bg-transparent focus-ring-2 placeholder-gray-400 "
              type="text"
              placeholder="Employe name"
            />
            <div>
              <h3 className="text-md font-semibold text-zinc-300 mt-2">
                Category
              </h3>
              <input
                value={category}
                onChange={(e) => setcategory(e.target.value)}
                className="w-4/5 rounded-md px-3 py-1 border-[1px] border-gray-400 bg-transparent focus-ring-2 placeholder-gray-400 "
                type="text"
                placeholder="design , dev , etc"
              />
            </div>
          </div>
        </div>
        <div className="w-[38vw] flex flex-col p-10 ">
          <h3 className="text-md font-semibold text-zinc-200 mb-2">
            Description
          </h3>
          <textarea
            value={taskDescription}
            onChange={(e) => settaskDescription(e.target.value)}
            className=" px-2 bg-transparent border-[1px] border-gray-300 focus:ring-1 no-underline ring-gray-300 text-gray-200 "
            name=""
            cols="30"
            rows="8"
            id=""
          ></textarea>
          <button className="px-2 py-2 bg-green-700 rounded-md mt-[8px] ">
            Create task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTask;
