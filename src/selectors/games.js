

export default league => {
    switch (league) {
        case "England-league":
            return "Premier League";
        
        case "German-league":
            return "BundesLiga";
    
        case "France-league":
            return "League 1"

        case "Isreal-league":
            return "Israeli Premier League";

        case "spanish-league":
            return "LaLiga";
            
        case "Italy-league":
            return "Serie A";

        case "Champions-league":
            return "Champions League"; 

        case "uefa-league":
            return "Uefa League";
    
        case "Other leagues":
            return "Others";
        
        default:
            return "";
        }
}