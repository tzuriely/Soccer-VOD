
export default (games, league) => {
            switch (league) {
            case 'Englandleague':
                return games.then(result => result.LastFiveEvents.Englandleague);
                ;
           default:
                return games;
        }
    }
