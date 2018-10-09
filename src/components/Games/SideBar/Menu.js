import React, { Component } from "react";
import { BrowserRouter, Route, Switch, Link, withRouter } from 'react-router-dom';

class Menu extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        var visibility = "hide";
    
        if (this.props.menuVisibility) {
        visibility = "show";
        }
    
        return (
        <div id="flyoutMenu"
            //onMouseDown={this.props.handleMouseDown} 
            className={visibility}>
                    <ul className="gamesList">
                        {this.props.selectedGames.map((game, index) =>
                            <li className="gamesList-item" key={index}>
                                <Link onClick={this.props.handleMouseDown} className="gameList-link" to={'/league/' + this.props.league + '/' + game.title}>{game.title}</Link>  
                            </li>
                        )}
                    </ul>
        </div>
        );
    }
}
 
export default Menu;