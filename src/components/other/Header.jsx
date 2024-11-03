import React, { useEffect, useState } from "react";
import { setLocalStorage } from "../../utils/LocalStorage";

const Header = (props) => {
  const [userData, setUesrData] = useState("Name");

  // if(!data.name){
  //   setUesrData('')
  // }else{
  //   setUesrData('Name')
  // }

    const logOutUser = () => {
      localStorage.setItem("logOutUser", "");
      console.log(props.changeUser); 
      props.changeUser('')
      // window.location.reload(true);
    };

  return (
    <div className="flex items-end justify-between ">
      <h1 className="text-1xl font-semibold text-slate-200 ">
        Hello <span className="text-3xl text-zinc-300 font-bold">Name👋</span>
      </h1>
      <button
      id="button"
        onClick={() => logOutUser()}
        className="bg-emerald-600 text-lg font-medium text-white px-4 py-3 rounded-md "
      >
        Log Out
      </button>
    </div>
  );
};

export default Header;
