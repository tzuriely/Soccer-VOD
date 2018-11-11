import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import Header from "../components/Header/Header";
import HomePage from '../components/Pages/HomePage'
import LeaguePage from '../components/Pages/LeaguePage';
import SearchPage from '../components/Pages/SearchPage';
import Footer from '../components/Footer/Footer'

const AppRouter = () => (
        <BrowserRouter>
            <div className="container">
                <Header />
                    <div className="appRouter-body">
                        <Switch>
                            <Route path="/" component={HomePage} exact={true} />
                            <Route path="/League/:name" component={LeaguePage} exact={true}/>
                            <Route path="/League/:name/:id" component={LeaguePage} exact={true}/>
                            <Route path="/Special/:name/:id" component={LeaguePage} exact={true}/>
                            <Route path="/Search/:textToFind" component={SearchPage} exact={true}/>
                            <Route path="/Search/:textToFind/:id" component={SearchPage} exact={true}/>

                            {/* <div className="appRouter-row">
                                <div className="appRouter-leftColumn"></div>
                                <div className="appRouter-centerColumn">
                                    <Route path="/" component={HomePage} exact={true} />
                                    <Route path="/LeaguePage/:name/:id" component={GamesRouter} />
                                    <Route path="/LeaguePage/:name" component={GamesRouter} exact={true}/>
                                </div>
                                <div className="appRouter-rightColumn">
                                    <WatchingList />
                                </div>
                            </div> */}
                        </Switch>                  
                    </div>
                <Footer />
            </div>
        </BrowserRouter>
);

export default AppRouter;