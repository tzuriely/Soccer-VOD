import React from 'react';
import SearchBox from './SearchBox';

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
                    <div className="nav-menu">
                        <div className="nav-menu-top">
                            <SearchBox className="nav-menu-top-searchBox"/>
                        </div>
                        <div className="nav-menu-bottom">
                            <div onClick={this.classToggle} className="Navbar__Link Navbar__Link-toggle">בחר ליגה</div>
                            <div className="nav-items" >
                                <div onClick={this.classToggle}>
                                    <a onClick = {() => this.props.onChoose('England-league')}>אנגלית</a>
                                </div>
                                <div onClick={this.classToggle}>
                                    <a onClick = {() => this.props.onChoose('France-league')}>צרפתית</a>
                                </div>
                                <div onClick={this.classToggle}>
                                    <a onClick = {() => this.props.onChoose('German-league')}>גרמנית</a>
                                </div>
                                <div onClick={this.classToggle}>
                                    <a onClick = {() => this.props.onChoose('Isreal-league')}>ישראלית</a>
                                </div>
                                <div onClick={this.classToggle}>
                                    <a onClick = {() => this.props.onChoose('spanish-league')}>ספרדית</a>
                                </div>
                                <div onClick={this.classToggle}>
                                    <a onClick = {() => this.props.onChoose('Italy-league')}>איטלקית</a>
                                </div>
                                <div onClick={this.classToggle}>
                                    <a onClick = {() => this.props.onChoose('Champions-league')}>אלופות</a>
                                </div>
                                <div onClick={this.classToggle}>
                                    <a onClick = {() => this.props.onChoose('uefa-league')}>אירופית</a>
                                </div>
                                <div onClick={this.classToggle}>
                                    <a onClick = {() => this.props.onChoose('Other leagues')}>נידחים</a>
                                </div>
                        </div>
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