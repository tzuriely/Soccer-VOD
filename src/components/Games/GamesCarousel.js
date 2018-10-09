import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';

class GamesCarousel extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Carousel showArrows={true} showStatus={false}>
                {this.props.selectedGames.map((game, index) =>
                    <div>
                        <img src="https://images.taboola.com/taboola/image/fetch/f_jpg%2Cq_auto%2Ch_200%2Cw_200%2Cc_fill%2Cg_faces:auto%2Ce_sharpen/http%3A//cdn.taboolasyndication.com/libtrc/static/thumbnails/a752447a45f0bc6883b6b93d49b24f3d.jpg" alt=""/>
                        <Link className="gameList-link" to={'/league/' + this.props.league + '/' + game.title}>{game.title}</Link>  
                    </div>

                    // <li className="gamesList-item" key={index}>
                    //     <Link className="gameList-link" to={'/league/' + this.props.league + '/' + game.title}>{game.title}</Link>  
                    // </li>
                )}
            </Carousel>
        )
    }
}

export default GamesCarousel;