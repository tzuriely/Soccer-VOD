import React from 'react';
import Player from '../Games/Player/Player';
import GamesList from '../Games/Player/GamesList';

import {fetchSearch, fetchEvent} from '../../actions/games'

class SearchPage extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            gamesList: [],
            selectedGame: {}
        }
        this.returnSelectedGame = this.returnSelectedGame.bind(this);
        this.updateState = this.updateState.bind(this);
    }

    componentDidMount() {
        this.updateState(this.props.match.params.textToFind);
        
    }

    componentDidUpdate(prevProps) {
        if(this.props.match.params.textToFind != prevProps.match.params.textToFind || 
            this.props.match.params.id != prevProps.match.params.id) {
            this.updateState(this.props.match.params.textToFind);
        }
        window.scrollTo(0, 0);
    }

    updateState(textToFind) {
        fetchSearch(textToFind)
        .then(data => this.setState({gamesList: data}));

        if(this.props.match.params.id == undefined) {
            () => this.setState({selectedGame: gamesList[0]})
        } else {
            fetchEvent(this.props.match.params.id)
            .then(data => this.setState({ selectedGame: data}));    

        }   
    }

    render() {
        if(this.state.gamesList.length > 0) {
            return (
                <div className='searchPage'>
                    <div className="searchPage-title">
                        Search Result Of: {this.props.match.params.textToFind}
                    </div>
                    <div className="searchPage-content">
                        <div className='searchPage-gamesList'>
                            <GamesList games={this.state.gamesList}  linkPath = {"Search/" + this.props.match.params.textToFind} notToShow={this.props.match.params.id}/>
                        </div>
                        <div className='searchPage-player'>
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
                <div className="searchPage-title">I am sorry but i have nothing for you</div>
            )
        }

    }

    returnSelectedGame = (id) => {
        if(id == undefined) {
            return this.state.gamesList[0];
        }
        else {
            return fetchEvent(this.props.match.params.id);

        }
    }

}

export default SearchPage;