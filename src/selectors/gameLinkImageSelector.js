export const gameLinkSelector = (link) => {
    if(link.includes('matchat')) {
        return "/images/gamesGridImages/gamesGridImage" + getRandomInt(1,4) +".jpg";
    }
    else {
        return "";
    }
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }