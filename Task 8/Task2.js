console.log(startEliminationGame(7, 3));
console.log(startEliminationGame(11, 19));
console.log(startEliminationGame(1, 300));
console.log(startEliminationGame(14, 2));
console.log(startEliminationGame(100, 1));

function startEliminationGame(n, step) {
    let players = Array.from({length: n}, (_, i) => i + 1)
    let playerCount = 0;
    let circleCount = 0;
    while (players.length != 1) {
        while (playerCount < players.length) {
            if (circleCount != step - 1) {
                playerCount++;
                circleCount++;
            } else {
                players.splice(playerCount, 1);
                circleCount = 0;
                if (players.length == 1) {
                    break;
                }
            }
        }
        playerCount = 0;
    }
    return players[0];
}