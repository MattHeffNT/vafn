import React from 'react';
import Dictaphone from './Speech.js';
import Submit from './Submit';
import Landing from './landing';
import Contact from './contact';
import { HashRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
    return (
        <div className="component">
            {/* controller for front end */}
            <Router>
                <Switch>
                    <Route exact path="/" component={Landing}>
                        <Landing />
                    </Route>
                    <Route path="/contact" component={Contact}></Route>
                    <Route path="/submit" component={Submit}></Route>
                    <Route path="/speech" component={Dictaphone}>
                        <Dictaphone />
                    </Route>
                </Switch>
            </Router>
        </div>
    );
}

export default App;
