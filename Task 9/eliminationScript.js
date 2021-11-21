function getElimination() {
    var inputN = document.getElementById("getEliminationInputN").value;
    var step = document.getElementById("getEliminationInputStep").value;
    document.getElementById("getEliminationResult").innerHTML = startEliminationGame(parseInt(inputN, 10), parseInt(step, 10)).toString();
}

function resetEliminationFields() {
    document.getElementById("getEliminationInputN").value = "";
    document.getElementById("getEliminationInputStep").value = "";
    document.getElementById("getEliminationResult").innerHTML = "";
}

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