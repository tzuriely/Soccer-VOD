import React from 'react';
import moment from 'moment';
import ReactPlayer from 'react-player';


const Player = (props) => {
    return (
        <div className="player-container">
            <div className="player">
                <iframe frameBorder="0" className='player-reactPlayer' src={props.game.EmbedLink} allowFullScreen></iframe>
                <div className="player-details">
                    <div className="player-details-title">
                        {props.game.Title}
                    </div>
                    <div className="player-details-date">
                        {moment(props.game.StartDate).format('DD/MM/YYYY')}
                    </div>
                    <div className="player-details-league">
                        {props.game.League}
                    </div>
                </div>
            </div>
        </div>

 )
}


export default Player;