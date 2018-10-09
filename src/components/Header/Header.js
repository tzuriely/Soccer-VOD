import React from 'react';

import PageTitle from './PageTitle';
import SearchBox from './SearchBox';
import LeagueMenu from './LeagueMenu';


class Header extends React.Component {
    constructor(props) {
        super(props);

    }
    render() {
        return(
            <nav className="nav">
                <div className="nav-primary">
                    <div className="nav-top">
                        <div className="nav-top-logo">
                            Soccer-VOD
                            {/* <img src="/images/logo.png"/> */}
                        </div>
                        <div className="nav-top-search">
                            <SearchBox />
                        </div>  
                    </div> 
                    <PageTitle />
                </div>

                <LeagueMenu />
            </nav>
        )
    }
}

export default Header;