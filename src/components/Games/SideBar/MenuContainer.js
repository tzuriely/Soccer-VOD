import React from 'react';
import MenuButton from './MenuButton';
import Menu from './Menu';

class MenuContainer extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state = {
            visible: false
        };

        this.toggleMenu = this.toggleMenu.bind(this);
        this.handleMouseDown = this.handleMouseDown.bind(this);
    }
    render() {
        return (
            <div className = "menuContainer">
                <MenuButton handleMouseDown={this.handleMouseDown}/>
                <Menu handleMouseDown={this.handleMouseDown}
                  menuVisibility={this.state.visible} 
                  selectedGames={this.props.selectedGames} 
                  league = {this.props.league}/>

            </div>
        )
    }

    toggleMenu() {
        this.setState({
            visible: !this.state.visible
        });
      }

    handleMouseDown(e) {
        this.toggleMenu();
     
        console.log("clicked");
        e.stopPropagation();
      }
}
// const GamesList = (props) => (
//     <ul className="gamesList">
//         {props.selectedGames.map((game, index) =>
//             <li className="gamesList-item" key={index}>
//                 <Link className="gameList-link" to={'/league/' + props.league + '/' + game.title}>{game.title}</Link>
                
//             </li>
//         )}
//     </ul>
// )


export default MenuContainer;