import React from 'react';
import Dictaphone from './Speech.js';
import Landing from './landing';
import Contact from './contact';
import Submit from './Submit';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch,
  useParams
} from "react-router-dom";

 
function App() {
  
  return (

    <div className="component">
        <Router>
        <Switch>
            <Route path="/" exact>
            <Landing />
            </Route>
            <Route path="/contact" component = {Contact}>
            </Route>

            <Route path="/contact" component = {Submit}>
            </Route>
        </Switch>
      </Router>
    </div>
  )
}
 
export default App;