
export const FETCH_GAMES_BEGIN   = 'FETCH_GAMES_BEGIN';
export const FETCH_GAMES_SUCCESS = 'FETCH_GAMES_SUCCESS';
export const FETCH_GAMES_FAILURE = 'FETCH_GAMES_FAILURE';
export const UPDATE_SELECTED_LEAGUE = 'UPDATE_SELECTED_LEAGUE';


const selectLeagueAction = (league = '') => ({
    type: UPDATE_SELECTED_LEAGUE,
    payload : league
});

export const fetchGamesBegin = () => ({
  type: FETCH_GAMES_BEGIN
});

export const fetchGamesSuccess = games => ({
  type: FETCH_GAMES_SUCCESS,
  payload: { games }
});

export const fetchGamesFailure = error => ({
  type: FETCH_GAMES_FAILURE,
  payload: { error }
});

//GET_ALL
export function fetchGames() {
    return (dispatch) => {
        //dispatch(fetchGamesBegin());
        return fetch("http://95.211.244.52:8080/api/events/getlastevents")
        .then(handleErrors)
        .then(res => res.json())
        //.then(json => JSON.parse(json || '{}'))
        .then(json => {
            dispatch(fetchGamesSuccess(json));
            return json;
        })
        .catch(error => { 
            console.log(error);
            dispatch(fetchGamesFailure(error));
        }
        );
    }
};

function handleErrors(response) {
    if(!response.ok) {
        throw Error(response.statusText);
    }
    return response;
}