import React from 'react';
import moment from 'moment';
import ReactPlayer from 'react-player';


const Game = (props) => {
    if(props.selectedGame != undefined)
    {
        return (
            <div className="game">
                <div className="game-container">
                    <div className="game-title">
                        {props.selectedGame.title}
                    </div>
                    <div className="player-wrapper">
                        <ReactPlayer
                            url='www.dailymotion.com/embed/video/x6umdzk'
                            className='game-video'
                            controls={true}
                            height='100%'
                            width='100%'
                        />
                    </div>

                </div>
            </div>
        )
    }
    else {
        return <div>Choose Game</div>
    }
}
// (  
//     <div className="game">
//         <div>
//                 <a href={props.link}>
//                     <div className='game-title'>
//                         {props.title}
//                     </div>
//                     <hr className="game-hr"></hr>
//                     <div className="game-row">
//                         <div className="game-rightColumn">
//                             <img className='game-avatar' alt='avatar'  src={props.providerImage}/>
//                         </div>
//                         <div className="game-leftColumn">
//                             <div className='game-details'>
//                                 <div>
//                                     {props.league} :ליגה
//                                 </div>
//                                 <div className='game-date'> 
//                                 תאריך: {moment(props.date).format('DD/MM/YYYY H:mm')} 
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </a>
//             </div>
//     </div>
// )

const clickOnMobile = (index) => {
    if( window.innerWidth < 1024) {     
        console.log(index); 
        const link = document.getElementById(index).getElementsByClassName('game-link');
        link[0].click(); 
      } 
}


export default Game;






    // <div className='game' onClick={() => clickOnMobile(props.index)} id={props.index}>
    //     <div className='game-row'>
    //         <div className='game-column game-column-left'>
    //             <a className='game-link' href={props.link} target="_blank">צפה</a>
    //         </div>
    //         <div className='game-column game-column-center'> 
    //             <div className='game-title'>
    //                 {props.title}
    //             </div>
    //         </div>
    //         <div className='game-column game-column-right'>
    //                 <img className='game-avatar' alt='avatar'  src={props.providerImage}/>    
    //         </div>
    //     </div>
    //     <div className='game-details'>
    //         <div>{props.league}</div>
    //         {<div className='game-date'> {moment(props.date).format('DD/MM/YYYY H:mm')} </div>}
    //     </div>
    // </div>