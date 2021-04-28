import React, {useState } from "react";
import SignUp from './components/SignUp';
import LoginForm from './components/Login';

import EditUser from './components/EditUser';
import CreatePlant from "./components/CreatePlant";

const App = () => {
 
  return (
    <div className="App">
      {/* {(user.phoneNumber != "") ? (
        <div className= "welcome">
          <h2>Welcome, <span>{user.username}</span></h2>
          <button onClick= {Logout}>Logout</button>
        </div>
      ) : (
        <LoginForm Login={Login} error={error}/>
      )} */}
        <div>
          <EditUser/>
       </div>

      <div>
          <SignUp />
       </div>
       <CreatePlant/>
      </div>

  );
};
export default App;








  