export const UPDATE_SEARCH_RESULT = 'UPDATE_SEARCH_RESULT';


const selectLeagueAction = (result = []) => ({
    type: UPDATE_SEARCH_RESULT,
    payload : result
});


export const fetchSearch = search => {
    return (dispatch) => {
        let apiString = "http://95.211.244.52:8080/api/events/search/?title=" + search;
        return fetch(apiString)
        .then(handleErrors)
        .then(res => res.json())
        //.then(json => JSON.parse(json || '{}'))
        .then(json => {
            dispatch(selectLeagueAction(json));
            return json;
        })
        .catch(error => { 
            console.log(error);
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
