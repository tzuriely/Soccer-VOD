import React from 'react';
import TopHeader from './TopHeader';
import Menu from './Menu';
import LogoHeader from './LogoHeader';

const Header = () => (
    <div className="header">
        <div className="header-top">
            <TopHeader />
        </div>
        {/* <div className="header-logo">
            <LogoHeader />
        </div> */}
        <div className="header-menu">
            <Menu />
        </div>
    </div>
)

export default Header;