import React from 'react';

import Game from './Game';
import MenuContainer from './SideBar/MenuContainer';
import Slider from './Carousel/Slider';
import { Carousel } from 'react-responsive-carousel';

const Games = (props) => {

    var sg = {};
    if(props.selectedGame == undefined)
    {
        sg = props.selectedGames[0];
    }
    else {
        sg = props.selectedGame;
    }
    return (
        <div>
            <div className='games-area'>
               <Game selectedGame = {sg}/>
               <Slider selectedGames={props.selectedGames} league = {props.league}/>
            </div>
        </div>
    )
}


const returnProviderImage = (providerId)  => {
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

export default Games;