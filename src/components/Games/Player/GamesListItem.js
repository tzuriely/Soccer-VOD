import React from 'react';
import ReactPlayer from 'react-player';
import moment from 'moment';
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import {gameLinkSelector} from '../../../selectors/gameLinkImageSelector';


const GamesListItem = (props) => {
    let linkImage = gameLinkSelector(props.image[0]);
    return (
        <div className="gamesListItem" id={props.id}>
            <div className="gamesListItem-image">
                {
                    linkImage == "" ? (
                        <ReactPlayer
                        url={props.image[0]}
                        className='gamesListItem-reactPlayer inactiveLink'
                        height='100%'
                        width='100%'
                        controls={false}
                    />
                    ) : (
                    <iframe frameBorder="0" className='gamesListItem-reactPlayer inactiveLink' src={props.image[0]} allowFullScreen="autoplay"></iframe>

                        // <img className="player-reactPlayer" src={linkImage}/>
                    )
                }
            </div>
            <Link className="gamesListItem-details" to={"/" + props.linkPath + "/" + props.id}>
                <div>
                    <div className="gamesListItem-details-title">
                        {props.title}
                    </div>
                    <div className="gamesListItem-details-date">
                        {moment(props.date).format('DD/MM/YYYY')}
                    </div>
                    <div className="gamesListItem-details-league">
                        {props.league}
                    </div>
                </div>        
            </Link>
        </div>
    )

}

export default GamesListItem;