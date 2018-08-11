import React from 'react';
import moment from 'moment';

import {fetchGames} from '../../actions/watchList'

class WatchingList extends React.Component {
    constructor(props) {
        super(props);
        
        this.state = {
            games: []
        }
    }

    render() {
        if(this.state.games == []) {
            console.log("start");
            return(<div></div>)
        }

        return (
            <div>
                <table>
                    <tr className= "watchingList-table-titles">
                        <th>משחק</th>
                        <th>תאריך</th>
                        <th>ערוץ</th>
                    </tr>
                    { console.log(this.state.games)} 
                    {this.state.games.map((game,index) => 
                        <tr key={index}>
                            <th>{game.EventName}</th>
                            <th>{game.StartTime}</th>
                            <th>{game.Channel}</th>
                        </tr>   
                    )}
                </table>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://95.211.244.52:8080/api/BoardCast/')
        .then(response => response.json())
        .then(games => this.setState({ games }));
    }
}

export default WatchingList;