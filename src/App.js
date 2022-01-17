
import './App.css';
import {Switch, Route} from "react-router-dom";
import {Home} from "./Components/Home";
import {Admin} from "./Components/Admin";
import {Login} from "./Components/Login";
import {Addjob} from "./Components/Addjob";

import {Navbar} from "./Components/Navbar";
import {PrivateRoute} from "./Components/PrivateRoute";


function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route exact path = "/">
          <Home />
        </Route>
        <PrivateRoute path = "/admin">
          <Admin />
        </PrivateRoute>
        <Route path = "/login">
          <Login />
        </Route>
        <PrivateRoute path = "/Addjob" >
          <Addjob />
        </PrivateRoute>
      </Switch>
    </div>
  );
}

export default App;
