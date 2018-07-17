

const selectedLeagueReducerDefaultState = '';

export default (state = selectedLeagueReducerDefaultState, action) =>{
    switch(action.type) {
        case 'UPDATE_SELECTED_LEAGUE':            
            return action.selectedLeague;
        default:
        return state;
    }
};