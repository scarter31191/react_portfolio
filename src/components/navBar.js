import React from 'react'
import{BrowserRouter as Router, Route, Switch} from "react-router-dom"
import Home from './Home'

function navBar() {
    return (
        <Router>
            <div>
                <h1>NAVBAR</h1>
                    <Switch>
                           <Route exact path="/" component={Home}/>
                           <Route to="/about">About</Route>
                           <Route to="/users">Users</Route>
                    </Switch>     
            </div>
        </Router>
            
    )
}

export default navBar
