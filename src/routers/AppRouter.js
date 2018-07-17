import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from '../components/Header';
import HomePage from "../components/HomePage";
import League from "../components/League";

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <Route path="/" component={HomePage} exact={true} />
                <Route path="/league/:name" component={League} />
                <Route path="/league" component={League} />

            </Switch>    
        </div>
    </BrowserRouter>
);

export default AppRouter;