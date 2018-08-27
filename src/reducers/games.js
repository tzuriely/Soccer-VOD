import {
    FETCH_GAMES_BEGIN,
    FETCH_GAMES_SUCCESS,
    FETCH_GAMES_FAILURE
  } from '../actions/games';

const gamesReducerDefaultState = {
    games:{},
    loading: false,
    error: null
};

export default function gamesProducer(state = gamesReducerDefaultState, action) {
    switch(action.type) {
        case FETCH_GAMES_BEGIN:
            console.log('begin');
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_GAMES_SUCCESS:
            console.log('success');
            return {
                ...state,
                loading: true,
                games: action.payload.games,
            };
            
        case FETCH_GAMES_FAILURE:
            console.log('error');
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                games: {}
            };
        default:
            return state;
    }
}