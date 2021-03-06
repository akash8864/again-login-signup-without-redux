import './App.css';
import Homepage from './components/homepage/Homepage';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/login/Login';
import Register from './components/register/Register';
import Chgpwd from './components/chgpwd/Chgpwd';
import {BrowserRouter as Router,Switch,Route} from "react-router-dom";
import { useState } from 'react';
function App() {
  const [user, setuser] = useState({})

  return (
    <div className="App">
      <Router>
        <Switch>
<Route exact path="/">{user && user._id?<Homepage loginuser={setuser} user={user}/>:<Login loginuser={setuser}/>}</Route>
<Route path="/login"><Login loginuser={setuser}/></Route> 
<Route path="/signup"><Register/></Route>
<Route path="/chgpwd"><Chgpwd/></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
