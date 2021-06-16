
function updatePlayerDisplay (gameManager) {
  $('#player-1 .current')
    .text(gameManager.players[0].scoreCurrent)
  $('#player-1 .roll')
    .text(gameManager.players[0].lastRoll)

  $('#player-2 .current')
    .text(gameManager.players[1].scoreCurrent)
  $('#player-2 .roll')
    .text(gameManager.players[1].lastRoll)
}

const main = () => {
  const gameManager = new GameManager()

  $('#player-1 .button-roll').on('click', () => {
    const roll = gameManager.rollDice()

    gameManager.setLastRollForPlayer(0, roll)
    gameManager.addCurrentScoreForPlayer(0, roll)

    updatePlayerDisplay(gameManager)
  })

  $('#player-1 .button-hold').on('click', () => {
  })

  $('#player-2 .button-roll').on('click', () => {
    const roll = gameManager.rollDice()

    gameManager.setLastRollForPlayer(1, roll)
    gameManager.addCurrentScoreForPlayer(1, roll)

    updatePlayerDisplay(gameManager)
  })

  $('#player-2 .button-hold').on('click', () => {
    alert('hold for player 2')
  })
}

$(main)