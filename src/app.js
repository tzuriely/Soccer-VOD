import React from 'react';
import ReactDOM from 'react-dom';
import './styles/styles.scss';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons'

import AppRouter from './routers/AppRouter'

library.add(faStroopwafel)



//fullStore.dispatch(fetchGames());
// fullStore.dispatch(selectLeaguePage('EnglandLeaguePage'));
// const state = fullStore.getState();
// console.log(state);

const jsx = (
    <AppRouter />
)
ReactDOM.render(jsx, document.getElementById('app'));
