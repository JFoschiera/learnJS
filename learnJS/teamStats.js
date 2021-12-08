const team = {
  _players: [
    { firstName: 'Pete', lastName: 'Wheeler', age: 27 },
    { firstName: 'Pablo', lastName: 'Sanchez', age: 19 },
    { firstName: 'Luiz', lastName: 'Gonzalez', age: 22 },
  ],
  _games: [
    { opponent: 'Broncos', teamPoints: 42, opponentPoints: 27 },
    { opponent: 'Rubros', teamPoints: 56, opponentPoints: 31 },
    { opponent: 'Vasco', teamPoints: 27, opponentPoints: 38 },
  ],
    get players() {
      return this._players;
   },
   get games() {
      return this._games;
   },
  addPlayer(firstName, lastName, age) {
    let player = {
      firstName: firstName,
      lastName: lastName,
      age: age,
    };
    this.players.push(player);
  },
    addGame(opponent, teamPoints, opponentPoints) {
    let game = {
      opponent: opponent,
      teamPoints: teamPoints,
      opponentPoints: opponentPoints,
    };
    this.games.push(game);
  }
};

team.addPlayer('Steph', 'Curry', 28);
team.addPlayer('Bugs', 'Bunny', 76);
team.addPlayer('Lisa', 'Leslie', 44);


team.addGame('Gremio', 33, 12);
console.log(team.games);
console.log(team.players);



