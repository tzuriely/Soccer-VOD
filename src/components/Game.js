import React from 'react';

const Game = (props) => (  
    <div className='game' onClick={clickOnMobile}>
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
            {/* <div> {new Date(props.date).toDateString()} </div> */}
            <div> Undifiend</div>
        </div>
    </div>
)

const clickOnMobile = (e) => {
    if( window.innerWidth < 1024) {      
        const link = document.getElementsByClassName('game-link');
        link[0].click(); 
      } 
}


export default Game;