import React, { useState } from "react";

function Login({handleLogin}) {

  const [email, setemail] = useState('');
  const [password, setpassword] = useState('')

  const submitHandler = (detail) => {
      detail.preventDefault();
      handleLogin(email , password)
      setemail("")
      setpassword("")
  }

  return (
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="border-2 border-zinc-600 p-16 rounded-lg ">
        <form onSubmit={(detail) => submitHandler(detail)} className="flex flex-col items-center justify-center ">
          <input
          value={email}
            onChange={(e) => {
                setemail(e.target.value);
            }}
            className="border-[1px] shadow-sm border-zinc-500 py-3 px-5 text-opacity-90 rounded-full placeholder:text-opacity-90 bg-transparent focus:ring-zinc-400 focus:ring-1 text-zinc-200  placeholder:text-zinc-100 outline-none text-base"
            type="email"
            placeholder="you@example.com"
          />
          <input
            value={password}
            onChange={(e) => { 
                setpassword(e.target.value);
            }}
            className="border-[1px] text-opacity-90 placeholder:text-opacity-90 focus:ring-zinc-400 shadow-sm focus:ring-1 border-zinc-500 py-3 px-5 rounded-full mt-4 bg-transparent placeholder:text-zinc-100 text-white outline-none text-base"
            type="password"
            placeholder="Enter you password"
          />
          <button
            className="border-1 border-none font-bold bg-emerald-600 py-4 px-9 rounded-full mt-4 text-white outline-none text-sm "
            type="password"
          >
            Log in
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
