import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import gamesStore from './store/gamesStore'
import './styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'
import {Slider} from './components/Games/Carousel/Slider'

import AppRouter from './routers/AppRouter'

library.add(faStroopwafel)


const fullStore = gamesStore();

//fullStore.dispatch(fetchGames());
// fullStore.dispatch(selectLeague('Englandleague'));
// const state = fullStore.getState();
// console.log(state);

const jsx = (
    <Provider store = {fullStore}>
        <AppRouter />
    </Provider>
)
ReactDOM.render(jsx, document.getElementById('app'));
