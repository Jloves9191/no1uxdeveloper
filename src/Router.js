import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";

import history from './history';
import WelcomeContainer from './pages/Welcome/WelcomeContainer';
import ProfileContainer from './pages/Profile/ProfileContainer';

export default class Routes extends Component {
    render() {
        return (
            <Router history={history}>
                <Switch>
                    <Route exact path="/Welcome" component={WelcomeContainer} />
                    <Route exact path="/Profile" component={ProfileContainer} />
                </Switch>
            </Router>
        )
    }
}
