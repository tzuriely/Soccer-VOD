import React from 'react';
import GamesListItem from './GamesListItem';

const GamesList = (props) => (
    <div className="gamesList">
        {props.games.map((game, index) => 
            <div className="gamesList-game">
                <GamesListItem key = {index} title={game.Title} linkPath={props.linkPath} date={game.StartDate}
                 id={game.Id} image={game.EmbedLink} league={game.League} />
            </div>
        )}
    </div>
)

export default GamesList;