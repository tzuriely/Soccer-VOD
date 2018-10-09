import React, { Component } from "react";
 
class MenuButton extends Component {
  render() {
    return (
    <div id="menuButton"
              onMouseDown={this.props.handleMouseDown}>
        <div id = "menuButton-text">Games</div>
    </div>
    );
  }
}
 
export default MenuButton;