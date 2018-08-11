import React from 'react';
import { connect } from 'react-redux';
import Bar from './Bar';
import Game from './Game';
import {fetchGames} from '../actions/games';
import {selectLeague} from '../actions/selectedLeague';


class Games extends React.Component {
    constructor() {
        super();
        this.onChoose = this.onChoose.bind(this);
        this.returnProviderImage = this.returnProviderImage.bind(this);

    }

    render()
    {
        if (!this.props.games.loading||this.props.selectedGames === []) {
            return(
                    <div>
                        <div>
                            <Bar onChoose = {this.onChoose}/>
                        </div>
                        <div>Loading..........</div>
                    </div>) ;
          }
        
        return (
                <div>
                    <div>
                        <Bar onChoose = {this.onChoose}/>
                    </div>
                    <div className='games-area'>
                        <ul>
                            {this.props.selectedGames.map((game, index) =>
                            <Game key={index} link = {game.url}
                            league = {game.league}
                            title = {game.title}
                            date = {game.LastUpdate}
                            providerImage={this.returnProviderImage(game.providerId)}/>
                            )}
                        </ul>
                    </div>
                    {/* <GoogleAdd /> */}
                </div>
        )
    }

    componentDidMount(){
        console.log('mount');
        this.props.dispatch(fetchGames());
        }
    
    returnProviderImage(providerId) {
        console.log(providerId);
        switch(providerId) {
            case 1:
                return '/images/channels/footytube.png';
            case 2:
                return '/images/channels/one.png';
            case 3:
                return '/images/channels/sport1.png';

            case 4:
                return '/images/channels/sport5.png';

            case 5:
                return '/images/channels/kan.png';
        }
    }

    onChoose(league) {
        this.props.dispatch(selectLeague(this.props.games, league));
    }
} 
            
const mapStateToProps = state => ({
    games: state.games,
    selectedGames: state.selectedGames
 });

export default connect(mapStateToProps)(Games);