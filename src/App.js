import React from "react";
import EditUser from './components/EditUser';
import CreatePlant from "./components/CreatePlant";
import Home from "./components/Home";
import SignUp from "./components/SignUp";
import LoginForm from './components/Login';
import Footer from './components/Footer';
import UserDashboard from './components/UserDashboard';
import Plant from './components/Plant';
import EditPlant from "./components/EditPlant";
import Header from "./components/Header";
import { Route, Switch } from "react-router";
import PrivateRoute from "./components/PrivateRoute";


const App = () => {

  return (
    <div className="App">
      <Header/>
      <main>
        <Switch>
          <PrivateRoute path="/user/:user_id/edit" component={EditUser}/>
          <PrivateRoute path="/user/:user_id/plant/create" component={CreatePlant}/>
          <PrivateRoute
            path="/user/:user_id/plant/:plant_id/edit"
            component={EditPlant}
          />
          <PrivateRoute
            path="/user/:user_id/plant/:plant_id"
            component={Plant}
          />
          <PrivateRoute
            exact path="/user/:user_id/plants"
            component={UserDashboard}
          />
          <Route path="/login" component={LoginForm} />
          <Route path="/signup" component={SignUp} />
          <Route exact path='/' component = { Home }/>
        </Switch>
      </main>
      <Footer/>
        
    </div>

  );
};
export default App;








  