import React from 'react';
import moment from 'moment';

const Game = (props) => (  
    <div className='game' onClick={() => clickOnMobile(props.index)} id={props.index}>
        <div className='game-row'>
            <div className='game-column game-column-left'>
                <a className='game-link' href={props.link} target="_blank">צפה</a>
            </div>
            <div className='game-column game-column-center'> 
                <div className='game-title'>
                    {props.title}
                </div>
            </div>
            <div className='game-column game-column-right'>
                    <img className='game-avatar' alt='avatar'  src={props.providerImage}/>    
            </div>
        </div>
        <div className='game-details'>
            <div>{props.league}</div>
            {<div className='game-date'> {moment(props.date).format('DD/MM/YYYY H:mm')} </div>}
        </div>
    </div>
)

const clickOnMobile = (index) => {
    if( window.innerWidth < 1024) {     
        console.log(index); 
        const link = document.getElementById(index).getElementsByClassName('game-link');
        link[0].click(); 
      } 
}


export default Game;