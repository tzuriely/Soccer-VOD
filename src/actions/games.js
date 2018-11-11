//GET_ALL
export const fetchLastEvents = () => {
    return (fetch("http://95.211.244.52:5555/api/events/getlastevents")
    .then(res => res.json()))
};

export const fetchHottestGames = () => {
    return (fetch("http://95.211.244.52:5555/api/HottestVideos/HottestGames")
    .then(res => res.json()))
};

export const fetchLeague = (League) => {
    // let LeagueForAPI="";
    // switch (League) {
    //     case "England-League":
    //         LeagueForAPI="England";
    //         break;
    //     case "German-League":
    //         LeagueForAPI="";
    //         break;    
    //     case "France-League":
    //         LeagueForAPI="France";
    //         break;
    //     case "Isreal-League":
    //         LeagueForAPI="";
    //         break;
    //     case "spanish-League":
    //         LeagueForAPI="";
    //         break;            
    //     case "Italy-League":
    //         LeagueForAPI="";
    //         break;
    //     case "Champions-League":
    //         LeagueForAPI="";
    //         break;
    //     case "uefa-League":
    //         LeagueForAPI="";
    //         break;    
    //     case "Other Leagues":
    //         LeagueForAPI="";
    //         break;        
    //     default:
    //         return "";
    //     }
        let apiString = "http://95.211.244.52:5555/api/events/GetLocationEvents/?locationName=" + League;
        return (fetch(apiString)
        .then(res => res.json()))
};

export const fetchEvent = (eventId) => {
    let apiString = "http://95.211.244.52:5555/api/events/GetEvent/?Id=" + eventId;
    return (fetch(apiString)
    .then(res => res.json()))
};

export const fetchSearch = (textToFind) => {
    let apiString = "http://95.211.244.52:5555/api/events/search?title=" + textToFind;
    return (fetch(apiString)
    .then(res => res.json()))
};