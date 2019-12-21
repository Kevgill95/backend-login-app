import React, { Component } from 'react';
import { BrowserRouter, Switch } from "react-router-dom";

export default class App extends Component {
    render() {
        return (
            <div className='app'>
            <BrowserRouter>
                <Switch>
                <Route exact path={"/"} component={Home} />
                <Route exact path={"/dashboard"} component={Dashboard} />
                </Switch>
            </BrowserRouter>
            </div>
        )
    }
}