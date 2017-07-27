var mergeObjects = function(defaults, custom) {
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
      highScore: 0 // integer
    };
    this.game = mergeObjects(defaults, overrides);
    this.gameConfig = mergeObjects(defaults, overrides);
    return this.game;
  },

  createUser: function(overrides) {
    var defaults = {
      name: "Sneaky Snek", // any string
      health: 100, // percentage
      currentScore: 0 // integer
    };
    this.user = mergeObjects(defaults, overrides);
    this.userConfig = mergeObjects(defaults, overrides);
    return this.user;
  },

  incrementScore: function() {
      this.user.currentScore+=this.game.scoreIncrement;
      return this.user;
  },

  decrementHealth: function() {
      this.user.health-=this.game.healthDecrement;
      if (this.user.health <= 0) {
        this.loseLife();
      }
      return this.user;
  },

  loseLife: function(func) {
    this.game.lives-=1;
    if (this.user.currentScore >= this.game.highScore) {
      this.game.highScore = this.user.currentScore;
    }
    if (this.game.lives <= 0) {
      // reset game config/user stuff THEN execute gameOver
      this.resetGame();
      this.gameOver(func);
    }
    return this.game;
  },

  resetGame: function() {
    this.game = mergeObjects(this.gameConfig, { highScore: this.game.highScore });
    this.user = mergeObjects(this.userConfig, {});
    //this.user = mergeObjects(this.userConfig, { currentScore: 0});
    return {
      game: this.game,
      user: this.user
    }
  },

  gameOver: function(func) {
    if (func) {
      func();
    }
  }
};
