import React from 'react';
import moment from 'moment';

import WatchingItem from './WatchingItem';

import {fetchGames} from '../../actions/watchList'

class WatchingList extends React.Component {
    constructor(props) {
        super(props);
        this.lastDate = moment("1995-12-25");
        this.state = {
            games: []
        }

        this.incDate = this.incDate.bind(this);
    }

    render() {
        if(this.state.games == []) {
            console.log("start");
            return(<div></div>)
        }
        return (
            <div className="watchingList">
                <div className="watchingList-title">
                    לוח שידורים
                </div>
                <hr className="watchingList-hr"></hr>
                <div className="watchingList-scroll">
                {this.state.games.map((game,index) => 
                (
                    <div key={index}>
                        {this.incDate(game.StartTime)}
                    <WatchingItem eventName = {game.EventName} 
                    startTime={game.StartTime} channel={game.Channel} />

                    </div>
                )
                
                    )}
                </div>
            </div>
        )
    }

    componentDidMount() {
        fetch('http://95.211.244.52:8080/api/BoardCast/')
        .then(response => response.json())
        .then(games => this.setState({ games }));
    }
    componentDidUpdate() {
        this.lastDate = moment("1995-12-25");
    }

    incDate = (newDate) => {
        if(this.lastDate.diff(moment(newDate.substring(0,10)), 'days') < 0) {
            this.lastDate = moment(newDate.substring(0,10));
            return <div className="watchingList-date">{this.lastDate.format('DD/MM/YYYY')}
            </div>;
        }
        return <div></div>;
    }
}

export default WatchingList;