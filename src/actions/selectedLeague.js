

//GET_ALL
export const selectLeague = (league = '') => ({
    type: 'UPDATE_SELECTED_LEAGUE',
    selectedLeague : league
});