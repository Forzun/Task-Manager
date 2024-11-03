import React, { useContext } from "react";
import AcceptTask from "../taskList/AcceptTask";
import { AuthContext } from "../../context/AuthProvide";

const AllTask = () => {
  const [userData , setuserData] = useContext(AuthContext);

  return (
    <div id="task" className="bg-[#191919] p-5 mt-5 rounded-md h-80 ">
         <div className="bg-[#2B2B2B] mb-2 py-2 px-4 flex justify-between rounded-md">
            <h2 className="w-1/5 font-semibold text-lg flex justify-center cursor-pointer rounded-md py-2 bg-[#4F515C]">Name</h2>
            <h3 className="w-1/5 font-semibold text-lg flex justify-center cursor-pointer rounded-md py-2 bg-[#558B70]">NewTask</h3>
            <h5 className="w-1/5 font-semibold text-lg flex justify-center cursor-pointer rounded-md py-2 bg-[#5D5C99]">Accept</h5>
            <h5 className="w-1/5 font-semibold text-lg flex justify-center cursor-pointer rounded-md py-2 bg-[#3ca562]">Complete</h5>
            <h5 className="w-1/6 font-semibold text-lg flex cursor-pointer rounded-md justify-center py-2 bg-[#EF4444]">Failed</h5>
          </div>
          <div className="h-[80%] ">
          {/* {userData.employees.map((item, index) => {
           return (
             <div key={index} className="bg-[#2B2B2B] mb-2 py-2 px-4 flex justify-between rounded-md">
                    <h2 className="w-1/5 flex justify-center cursor-pointer rounded-md bg-[#4F515C]">{item.name}</h2>
                    <h3 className="w-1/5 flex justify-center cursor-pointer rounded-md bg-[#558B70]">{item.taskNumbers.newTask}</h3>
                    <h5 className="w-1/5 flex justify-center cursor-pointer rounded-md  bg-[#5D5C99]">{item.taskNumbers.active}</h5>
                    <h5 className="w-1/5 flex justify-center cursor-pointer rounded-md bg-[#3ca562]">{item.taskNumbers.complete}</h5>
                    <h5 className="w-1/6 flex cursor-pointer rounded-md justify-center bg-[#EF4444]">{item.taskNumbers.failed}</h5>
             </div>
        );
      })} */}
          </div>
    </div>
  );
};

export default AllTask;
