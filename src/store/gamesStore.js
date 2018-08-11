import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import gamesReducer from '../reducers/games';
import selectedLeague from '../reducers/selectedLeague';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export default () => {
  const store = createStore(
    combineReducers({
      games: gamesReducer,
      selectedGames:selectedLeague
    }),
    composeEnhancers(applyMiddleware(thunk))
  );

  return store;
};
