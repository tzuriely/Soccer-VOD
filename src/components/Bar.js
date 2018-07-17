import React from 'react';
import { bindActionCreators } from 'redux';

class Bar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {

        }
        this.classToggle = this.classToggle.bind(this);
    }

    render() {
        return (
            <div id="back">
                <nav>
                    <div id='logo'>
                        <img src="/images/logo.png"/>
                    </div>
                    <div onClick={this.classToggle} className="Navbar__Link Navbar__Link-toggle">בחר ליגה</div>
                    <div className="nav-items" >
                        <div onClick={this.classToggle}>
                            <a onClick = {() => this.props.onChoose('Englandleague')}>אנגלית</a>
                        </div>
                        <div onClick={this.classToggle}>
                            <a onClick = {() => this.props.onChoose('Franceleague')}>צרפתית</a>
                        </div>
                        <div onClick={this.classToggle}>
                            <a onClick = {() => this.props.onChoose('Germanleague')}>גרמנית</a>
                        </div>
                        <div onClick={this.classToggle}>
                            <a onClick = {() => this.props.onChoose('Isrealleague')}>ישראלית</a>
                        </div>
                        <div onClick={this.classToggle}>
                            <a onClick = {() => this.props.onChoose('spanishleague')}>ספרדית</a>
                        </div>
                        <div onClick={this.classToggle}>
                            <a onClick = {() => this.props.onChoose('Italyleague')}>איטלקית</a>
                        </div>
                        <div onClick={this.classToggle}>
                            <a onClick = {() => this.props.onChoose('championsleague')}>אלופות</a>
                        </div>
                        <div onClick={this.classToggle}>
                            <a onClick = {() => this.props.onChoose('uefaleague')}>אירופית</a>
                        </div>
                        <div onClick={this.classToggle}>
                            <a onClick = {() => this.props.onChoose('Otherleagues')}>נידחים</a>
                        </div>
                    </div>
                </nav>
            </div>
        )
    }

    classToggle() {
        const navs = document.querySelectorAll('.nav-items')
        
        navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
        this.forceUpdate();
        }   
}



export default Bar;