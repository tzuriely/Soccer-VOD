import {CHANGE_PAGE_TITLE } from '../actions/pageTitle';

const currentPageTitleReducerDefaultState = '';

export default (state = currentPageTitleReducerDefaultState, action) =>{
    switch(action.type) {

        case CHANGE_PAGE_TITLE:            
            return action.payload;

        default:
            return state;
    }
};