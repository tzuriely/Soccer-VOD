import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import HomePage from "../components/HomePage";
import Header from "../components/Header/Header";
import GamesRouter from './GamesRouter';
import WatchingList from '../components/WatchingList/WatchingList';
import Slider from '../components/Games/Carousel/Slider';

const AppRouter = () => (
    <BrowserRouter>
        <div>
            <Header />
            <Switch>
                <div className="appRouter-row">
                    <div className="appRouter-rightColumn"></div>
                    <div className="appRouter-centerColumn">
                        <Route path="/" component={HomePage} exact={true} />
                        <Route path="/league/:name/:id" component={GamesRouter} />
                        <Route path="/league/:name" component={GamesRouter} exact={true}/>
                    </div>
                    <div className="appRouter-leftColumn">
                        <WatchingList />
                    </div>
                </div>
             </Switch>
        </div>
    </BrowserRouter>
);

export default AppRouter;