import React from 'react';
import GameLinkItem from './GameLinkItem';
import OnVisible, { setDefaultProps } from 'react-on-visible';


const GamesGrid = (props) => (
    <div className="gamesGrid">
        {props.games.slice(0, props.limit).map((game, index) => 
            <OnVisible className="gamesGrid-game" key={index}>
                <GameLinkItem key = {index} title={game.Title} League={game.League} area = {props.area}
                 date={game.StartDate} image={game.EmbedLink} id={game.Id}/>
            </OnVisible>
        )}
        
    </div>
)

export default GamesGrid;