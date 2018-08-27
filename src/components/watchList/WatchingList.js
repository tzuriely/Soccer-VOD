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
            <div className="watchingList-table-scrollableArea">
                <div className="watchingList-table" >
                    <div>לוח שידורים</div>
                    <table cellspacing="0" cellpadding="0">
                        <tbody> 
                            <tr className= "watchingList-table-titles">
                                <th>משחק</th>
                                <th>תאריך</th>
                                <th>ערוץ</th>
                            </tr>
                                {this.state.games.filter(g => moment(g.StartTime).isBefore(moment().add(2,'days')))
                                    .map((game,index) => 
                                        <tr className="watchingList-table-details" key={index}>
                                            <th>{game.EventName}</th>
                                            <th>{moment(game.StartTime).format('DD/MM/YYYY H:mm')}</th>
                                            <th>{game.Channel}</th>
                                        </tr>   
                                )}
                        </tbody>
                    </table>
                </div>
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