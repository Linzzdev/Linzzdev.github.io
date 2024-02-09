function playRockPaperScissor(player1, player2) {
    const validChoices = ["Pedra", "Papel", "Tesoura"];
    if (!validChoices.includes(player1) || !validChoices.includes(player2)) {
        return "Escolhas inválidas. Use 'Pedra', 'Papel' ou 'Tesoura'.";
    }
    if (player1 === player2) {
        return "Empate!";
    } else if (
        (player1 === "Pedra" && player2 === "Tesoura") ||
        (player1 === "Tesoura" && player2 === "Papel") ||
        (player1 === "Papel" && player2 === "Pedra")
    ) {
        return "Jogador 1 venceu!";
    } else {
        return "Jogador 2 venceu!";
    }
}

const resultado1 = playRockPaperScissor("Pedra", "Tesoura");
console.log(resultado1);

const resultado2 = playRockPaperScissor("Papel", "Papel");
console.log(resultado2);
