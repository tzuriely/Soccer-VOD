import React from 'react';
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';

const LogoHeader = () => (
    <div className="logoHeader">
        <div className="logoHeader-logo-wrapper">
            <div className="logoHeader-logo">
                <img className="logoHeader-icon" src="/images/icon.png"/>
                <div className="logoHeader-text">Soccer VOD</div>
            </div>
        </div>
        <div className="logoHeader-message">
            BLA BLA bla bla TExt text
        </div>
    </div>
)

export default LogoHeader;