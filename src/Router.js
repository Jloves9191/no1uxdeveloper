import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import WelcomeContainer from './pages/Welcome/WelcomeContainer';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/Welcome" component={WelcomeContainer} />
                </Switch>
            </Router>
        )
    }
}
