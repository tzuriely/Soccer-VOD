import React from 'react';
import { Link } from 'react-router-dom';

const LeagueMenu = () => (
    <div className="leagueMenu">
        <ul>
            <li> <Link to="/league/England-league">England</Link> </li>
            <li> <Link to="/league/German-league">German</Link> </li>
            <li> <Link to="/league/France-league">France</Link> </li>
            <li> <Link to="/league/Isreal-league">Israel</Link> </li>
            <li> <Link to="/league/spanish-league">Spain</Link> </li>
            <li> <Link to="/league/Italy-league">Italy</Link> </li>
            <li> <Link to="/league/Champions-league">Champions</Link> </li>
            <li> <Link to="/league/uefa-league">Europe</Link> </li>
            <li> <Link to="/league/Other leagues">Other</Link> </li>
        </ul>
    </div>
)

export default LeagueMenu;