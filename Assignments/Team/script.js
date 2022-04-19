//const we can't re assign teams to a different object but we can modify the data in the object.
const team = {
  // players and games properties _ means we don't want the DOM to change them.
  _players: [
    //populate players with objects
    { firstName: "Michael", lastName: "Jefferson", Age: 25 },
    { firstName: "Aaron", lastName: "Jones", Age: 23 },
    { firstName: "Karl", lastName: "Johnson", Age: 27 },
  ],
  _games: [
    //popluate games with some games data
    { opponent: "Spurs", teamPoints: 95, opponentPoints: 85 },
    { opponent: "Lakers", teamPoints: 105, opponentPoints: 115 },
    { opponent: "Nuggets", teamPoints: 77, opponentPoints: 75 },
  ],

  get players() {
    return this._players
  },

  get game() {
    return this._games
  },

  addPlayer(newFirstName, newLastName, newAge) {
    let player = {
      firstName: newFirstName,
      lastName: newLastName,
      newAge: newAge,
    }
    this.players.push(player)
  },
  addGame(newOpponent, newTeamPoints, newOpponentPoints) {
    let game = {
      opponent: newOpponent,
      teamPoints: newTeamPoints,
      opponentPoints: newOpponentPoints,
    }
    this.game.push(game)
  },
}

team.addPlayer("Bugs", "Bunny", 76)

console.log(team.players)

team.addGame("Titans", 100, 98)
console.log(team.game)
