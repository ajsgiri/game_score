var config = function(defaults, custom) {
  return Object.assign( {}, defaults, custom);
};

module.exports = {
  createGame: function(overrides) {
    var defaults = {
      lives: 3, // any position integer
      scoreIncrement: 1, // number or percentage
      healthDecrement: 25,
      difficulty: "easy", // easy, normal, difficult
      userPlay: false, // game is ongoing
      gameComplete: false  // state of game completion
    };

    this.game = config(defaults, overrides);
    return this.game;
  },

  createUser: function(overrides) {
    var defaults = {
      name: "Sneaky Snek", // any string
      health: 100, // percentage
      currentScore: 0, // integer
      highScore: 0 // integer
    };

    this.user = config(defaults, overrides);

    return this.user;
  },

  incrementScore: function() {
    return this.user.currentScore+=this.game.scoreIncrement;
  },

  decrementHealth: function() {
    if (this.user.health > this.game.healthDecrement) {
      return this.user.health-=this.game.healthDecrement;
    } else {
      return this.loseLife();
    }
  },

  loseLife: function() {
    if (this.currentScore > this.highScore) {
      this.highScore = this.currentScore;
    }
    if (this.game.lives > 1) {
      this.game.lives-=1;
      this.currentScore = 0;
      health = 100;
      return this.gameStop();
    } else {
      return this.gameOver();
    }
  },

  gameStart: function() {
    this.game.userPlay = true;
  },

  gameStop: function() {
    this.game.userPlay = false;
  },

  gameOver: function() {
    this.game.gameComplete = true;
  },

  replay: function() {
    this.createUser();
  },
};
