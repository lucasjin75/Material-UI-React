import React from 'react';
import { Switch, Route, Redirect} from "react-router-dom";
import Home from './page/home.js'
import Login from './page/login.js'
import Dashboard from './page/dashboard.js'
import { connect } from "react-redux";
import { useSelector } from "react-redux";

const PrivateRoute = ({ component: Component, ...rest })=>{
    const data = useSelector(state => state.user)
    return(
        <Route {...rest} render={(props) => (
            data.user.username !== ''
            ? <Component {...props} />
            : <Redirect to='/login' />
        )} />
    )
}

const PublicRoute = ({ component: Component, ...rest })=>{
    return(
        <Route {...rest} render={(props) => (
            <Component {...props} />
        )} />
    )
}
function App() {
    return (
        <Switch>
            <PublicRoute path="/login" component={Login}/>
            <PrivateRoute path="/dashboard" component={Dashboard}/>
            {/* <PublicRoute path="/dashboard" component={Dashboard}/> */}
            <PublicRoute path="/" component={Home}/>

        </Switch>
    );
}

export default  connect()(App);
