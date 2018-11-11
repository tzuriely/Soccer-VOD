import React from 'react';
import Player from '../Games/Player/Player';
import GamesList from '../Games/Player/GamesList';

import {fetchLeague, fetchLastEvents, fetchHottestGames, fetchEvent,} from '../../actions/games'

class LeaguePage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gamesList: [],
            selectedGame: {}
        }
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        this.updateState(this.props.match.params.name);
        
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.name != prevProps.match.params.name || 
            this.props.match.params.id != prevProps.match.params.id) {
            this.updateState(this.props.match.params.name);
        }
        window.scrollTo(0, 0);
    }

    updateState(name) {
        if(name == "Hottest Games") {
            fetchHottestGames()
            .then(data => this.setState({ gamesList: data }));
            fetchEvent(this.props.match.params.id)
            .then(data => this.setState({ selectedGame: data}));
        } else if(name == "Last Events") {
            fetchLastEvents()
            .then(data => this.setState({ gamesList: data }));
            fetchEvent(this.props.match.params.id)
            .then(data => this.setState({ selectedGame: data}));

        } else {
            fetchLeague(name)
            .then(data => this.setState({ gamesList: data }));    
            if(this.props.match.params.id == undefined) {
                () => this.setState({selectedGame: gamesList[0]})
            } else {
                fetchEvent(this.props.match.params.id)
                .then(data => this.setState({ selectedGame: data}));    

            }
        }   
    }

    render() {
        if(this.state.gamesList.length > 0) {
            return (
                <div className='leaguePage'>
                    <div className="leaguePage-title">
                        {this.props.match.params.name}
                    </div>
                    <div className="leaguePage-content">
                        <div className='leaguePage-gamesList'>
                            <GamesList games={this.state.gamesList} linkPath = {"League/" + this.props.match.params.name} notToShow={this.props.match.params.id}/>
                        </div>
                        <div className='leaguePage-player'>
                            {
                                this.props.match.params.id == undefined ? (
                                    <Player game={this.state.gamesList[0]}/>
                                ) : (
                                    <Player game={this.state.selectedGame}/>
                                )
                            }
                        </div>
                    </div>

                </div>
            )
        }
        else {
            return  (
                <div></div>
            )
        }

    }

}

export default LeaguePage;