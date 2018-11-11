import React from 'react';
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';

import SearchBox from './SearchBox';
import LogoHeader from './LogoHeader';

const TopHeader = () => (
    <div className="topHeader">
        <div className="topHeader-logo">
            <Link to="/">
                <img className="topHeader-icon" src="/images/logo.png"/>
            </Link>
                {/* <div className="topHeader-logo-text">Soccer VOD</div> */}
        </div>
        {/* <div className="topHeader-icons">
            <img className="topheader-icons-icon" src="/images/social/facebook.png"/>
            <img className="topheader-icons-icon" src="/images/social/twitter.png"/>
            <img className="topheader-icons-icon" src="/images/social/youtube.png"/>
            <hr className="topheader-icons-hr"/>
        </div> */}
        <div className="topHeader-search">
            <SearchBox />
        </div>
    </div>
)

export default TopHeader;