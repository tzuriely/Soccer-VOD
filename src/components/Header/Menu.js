import React from 'react';
import { Link } from 'react-router-dom';

const Menu = () => {
    const classToggle = () => {
        const navs = document.querySelectorAll('.LeagueMenu-items');
        
        navs.forEach(nav => nav.classList.toggle('LeagueMenu__ToggleShow'));
        this.forceUpdate();
        } 

    return (
        <div className="LeagueMenu">
            <div onClick={classToggle} className="Navbar__Link LeagueMenu__Link-toggle">
                <div className="LeagueMenu-HamburgerButton"></div>
                <div className="LeagueMenu-HamburgerButton"></div>
                <div className="LeagueMenu-HamburgerButton"></div>
            </div>
            <div className="LeagueMenu-items">
                <ul>
                    <li onClick={classToggle}> <Link to="/League/Uefa">Uefa</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/Brazil">Brazil</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/Israel">Israel</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/Spain">Spain</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/England">England</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/Germany">Germany</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/Italy">Italy</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/France">France</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/Holland">Holland</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/Turkey">Turkey</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/Russia">Russia</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/Greece">Greece</Link> </li>
                    <li onClick={classToggle}> <Link to="/League/Major">Major</Link> </li>
                </ul>
        </div>
    </div>
    )
}



export default Menu;