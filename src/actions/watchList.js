export const fetchGames = () => {
    fetch('http://95.211.244.52:8080/api/BoardCast/')
    .then(response => response.json())
    .then(games => {return games});
}