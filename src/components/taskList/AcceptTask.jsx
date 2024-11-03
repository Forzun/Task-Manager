import React from "react";

const AcceptTask = ({ data }) => {
  return (
    <div className="h-full w-[300px] bg-[#2B2B2B] p-5 rounded-xl flex-shrink-0 ">
      {data.tasks.map((item, index) => {
        return (
          <div>
            {" "}
            <div className="flex justify-between items-center ">
              <h3 className="bg-red-600 cursor-pointer text-sm font-semibold px-3 py-1 rounded-md">
                {data.tasks[0].category}
              </h3>
              <h4 className="text-base font-medium">{data.tasks[index].date}</h4>
            </div>
            <h2 className="mt-5 text-2xl font-semibold">
              {data.tasks[index].title}
            </h2>
            <p className="text-md mt-5 font-normal">
              {data.tasks[index].description}
            </p>
            <div className="flex justify-between mt-3">
              <button className="bg-green-500 py-1 px-2 text-sm rounded-md text-zinc-700 font-semibold">
                Complete task
              </button>
              <button className="bg-red-500 py-1 px-2 text-sm rounded-md text-zinc-700 font-semibold">
                Faild task
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default AcceptTask;
