let teamA = 0
let teamB = 0

let teamAEl = document.getElementById("team-a-score")
let teamBEl = document.getElementById("team-b-score")

function teamA1() {
    teamA += 1
    teamAEl.textContent = teamA;
}

function teamA2() {
    teamA += 2
    teamAEl.textContent = teamA;
}

function teamA3() {
    teamA += 3
    teamAEl.textContent = teamA;
}

function teamB1() {
    teamB += 1
    teamBEl.textContent = teamB;
}

function teamB2() {
    teamB += 2
    teamBEl.textContent = teamB;
}

function teamB3() {
    teamB += 3
    teamBEl.textContent = teamB;
}

function reset() {
    teamA = 0
    teamB = 0
    
    teamAEl.textContent = teamA;
    teamBEl.textContent = teamB;
}
