import React from 'react';
import {fetchLastEvents, fetchHottestGames} from '../../actions/games';
import GamesGrid from '../Games/GamesGrid';

class HomePage extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            hottestGames: [],
            lastEvents: []
        }
    } 

    componentDidMount() {
        fetchLastEvents()
        .then(data => this.setState({ lastEvents: data }));

        fetchHottestGames()
        .then(data => this.setState({ hottestGames: data }));
    }
    componentDidUpdate() {
    }
    render() {
        if(this.state.hottestGames !=[] && this.state.lastEvents != []) {
            return (
                <div className="homepage">
                    <div className="homepage-trend-title">Hottest Games</div>
                    <div className="homepage-trend-grid">
                        <GamesGrid games={this.state.hottestGames} limit={3} area="Hottest Games" />
                    </div>
                    
                    <div className="homepage-new-title">New Highlights</div>
                    <div className="homepage-new-grid">
                        <GamesGrid games={this.state.lastEvents} limit={20} area="Last Events" />
                    </div>
                </div> 

            )
        }

    }
}

export default HomePage;