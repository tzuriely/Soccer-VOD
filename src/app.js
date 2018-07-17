import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import gamesStore from './store/gamesStore'
import Games from '../src/components/Games'
import './styles/styles.scss';


const fullStore = gamesStore();

//fullStore.dispatch(fetchGames());
// fullStore.dispatch(selectLeague('Englandleague'));
// const state = fullStore.getState();
// console.log(state);

const jsx = (
    <Provider store= {fullStore}>
        <Games /> 
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
