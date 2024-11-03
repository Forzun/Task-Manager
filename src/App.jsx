import React, { useContext, useEffect, useState } from "react";
import Login from "./components/Auth/Login";
import EmployDashboard from "./components/Dashboard/EmployDashboard";
import AdminDashboard from "./components/Dashboard/AdminDashboard";
import { getLocalStorage, setLocalStorage } from "./utils/LocalStorage";
import { AuthContext } from "./context/AuthProvide";

function App() {
  const [user, setUser] = useState(null);
  const [loggedUser, setLoggedUser] = useState(null)
  const [userData , setuserData] = useContext(AuthContext);

//   useEffecjjjjt(() => { 
//     if(userData){
//       const loginUser = localStorage.getItem("loggedInUser");
//       if(loginUser){
//         setUser(loginUser.role)
//       }
//     }
// }, [userData])

  useEffect(() => { 
     const loggedInUser = localStorage.getItem("LoggedInUser");

     if(loggedInUser){ 
        const userData = JSON.parse(loggedInUser);
        setUser(userData.role);
        setLoggedUser(userData.data);
     }
  }, [])


  const handleLogin = (email, password) => {
    if (email == "admin@me.com" && password == "123") {
      setUser("admin"); 
      localStorage.setItem("loggedInUser", JSON.stringify({role:"admin"}));
    } else if (userData) {
      const employee = userData.find((e) => email == e.email && e.password == password)
      if(employee){ 
        setUser("employees"); 
        setLoggedUser(employee)
        localStorage.setItem("LoggedInUser",JSON.stringify({role:"employees" , data:employee}));        
      }
    } else {
      console.log("Invalid");
    }
  };

  return (
    <div className="overflow-x-hidden">
      {!user ? <Login handleLogin={handleLogin} /> : ""}
      {user == "admin" ? (<AdminDashboard changeUser={setUser} />) : user == "employees" ? (<EmployDashboard changeUser={setUser} data={loggedUser} />) : null }
    </div>
  );
}
export default App;
