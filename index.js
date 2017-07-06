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
      gameComplete: false,  // can't self reference using defaults.lives
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
      this.user.currentScore+=this.game.scoreIncrement;
      if (this.user.currentScore >= this.user.highScore) {
        this.user.highScore = this.user.currentScore;
      }
      return this.user;
  },

  decrementHealth: function() {
      this.user.health-=this.game.healthDecrement;
      if (this.user.health <= 0) {
        this.loseLife();
      }
      return this.user;
  },

  loseLife: function() {
    this.game.lives-=1;
    if (this.game.lives <= 0) {
      this.gameOver();
    }
    return this.game;
  },

  gameOver: function() {
    return this.game;
  },
};
