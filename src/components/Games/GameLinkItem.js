import React from 'react';
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';
import ReactPlayer from 'react-player';
import {gameLinkSelector} from '../../selectors/gameLinkImageSelector';
import moment from 'moment';


const GameLinkItem = (props) => {
    let linkImage = gameLinkSelector(props.image[0]);
    return (
        <div className="gameLinkItem">
            
            <Link to={"/Special/" + props.area + "/" + props.id}>
            {
                linkImage == "" ? (
                    <ReactPlayer
                    url={props.image[0]}
                    className='player-reactPlayer inactiveLink'
                    height='100%'
                    width='100%'
                    controls={false}
                />
                ) : (
                    <iframe frameBorder="0" className='player-reactPlayer inactiveLink' src={props.image[0]} allowFullScreen="autoplay"></iframe>
                    // <img className="player-reactPlayer" src={linkImage}/>
                )
            }


                    
                <div className="gameLinkItem-text">
                    <div className="gameLinkItem-text-title">{props.title}</div>
                    {/* <div className="gameLinkItem-text-LeaguePage">{props.League}</div> */}
                    <div className="gameLinkItem-text-date">{moment(props.date).format('DD/MM/YYYY')}</div>
                </div>
            </Link>
        </div>
    )

}

export default GameLinkItem;