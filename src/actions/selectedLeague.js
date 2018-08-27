export const UPDATE_SELECTED_LEAGUE = 'UPDATE_SELECTED_LEAGUE';


const selectLeagueAction = (league = '') => ({
    type: UPDATE_SELECTED_LEAGUE,
    payload : league
});

export function selectLeague(games, league) {
    console.log(league, games);

    return dispatch => {
        dispatch(selectLeagueAction(games.games[league]))
    }
}
