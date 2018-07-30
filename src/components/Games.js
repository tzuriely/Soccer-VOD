import React from 'react';
import { connect } from 'react-redux';
import Bar from './Bar';
import Game from './Game';
import {fetchGames} from '../actions/games';
import GoogleAdd from './GoogleAd';

class Games extends React.Component {
    constructor() {
        super();
        this.onChoose = this.onChoose.bind(this);
        this.returnProviderImage = this.returnProviderImage.bind(this);

        this.state = {
            league: []
        }
    }

    render()
    {
        if (!this.props.games.loading||this.state.league === []) {
            return <div>Loading..........</div>;
          }
        
        return (
                <div>
                    <div>
                        <Bar onChoose = {this.onChoose}/>
                    </div>
                    <div className='games-area'>
                        <ul>
                            {this.state.league.map((game, index) =>
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
        // console.log(this.props.games.games);
         var x = this.props.games.games;
        // console.log(x);

        switch(league) {
            case 'Englandleague':
            console.log('England');
            this.setState(() => ({ league: x["England-league"] }));
            break;

            case 'Franceleague':
                console.log('France');
                this.setState(() => ({ league: x["France-league"] }));
                break;

            case 'Germanleague':
                console.log('German');
                this.setState(() => ({ league: x["German-league"] }));
                break;

            case 'Isrealleague':
                console.log('Ísrael');
                console.log(x.Isreal-league);
                this.setState(() => ({ league: x["Isreal-league"] }));
                break;

                case 'spanishleague':
                console.log('Spanish');
                this.setState(() => ({ league: x["spanish-league"] }));
                break;

                case 'Italyleague':
                console.log('Italy');
                this.setState(() => ({ league: x["Italy-league"] }));
                break;

                case 'championsleague':
                    console.log('Champions');
                    this.setState(() => ({ league: x["Champions-league"] }));
                    break;
                
                case 'uefaleague':
                    console.log('uefa');
                    this.setState(() => ({ league: x["uefa-league"] }));
                    break;
                
                case 'Otherleagues':
                    console.log('Other');
                    this.setState(() => ({ league: x["Other leagues"] }));
                    break;
        }
    }
} 
            
const mapStateToProps = state => ({
    games: state.games
 });

export default connect(mapStateToProps)(Games);