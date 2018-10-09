import {UPDATE_SEARCH_RESULT } from '../actions/search';
import {UPDATE_SELECTED_LEAGUE } from '../actions/selectedLeague';

const selectedLeagueReducerDefaultState = [];

export default (state = selectedLeagueReducerDefaultState, action) =>{
    switch(action.type) {

        case UPDATE_SELECTED_LEAGUE:            
            return action.payload;

        case UPDATE_SEARCH_RESULT:
            return action.payload;

        default:
            return state;    
    }
};