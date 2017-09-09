# Game Score

This package handles logic to create a scored Game with User health and life attributes. It provides helper functions to hook into common game logic such as handling score, decrementing health, losing life, game over, etc.

### Installation
```
npm install game_score
```
### How to Use
To use this package, create an instance of both a user and a game.
```javascript
var Game = createGame();
var User = createUser();
```
The create based functions return objects that contain suggested default attributes.
##### Default Game Object
```javascript
{
  lives: 3, // integer
  scoreIncrement: 1, // integer
  healthDecrement: 25, // percentage based integer
  difficulty: "easy", // string
  userPlay: false, // boolean
  gameComplete: false,  // boolean
  highScore: 0 // integer
};
```

##### Default User Object
```javascript
{
  name: "Sneaky Snek", // string
  health: 100, // percentage based integer
  currentScore: 0 // integer
};
```

#### Custom Game/User properties
Both `createGame()` and `createUser()` accept objects which can be used to overwrite default user/games values or add custom ones.
```javascript
var Game = createGame({
  lives: 4,
  bonus: 100
});

var User = createUser({
  name: "Solid State",
  color: "blue"
});
```

The resulting user and game objects are as follows:
##### Customized Game Object
```javascript
{
  lives: 4, // default override
  bonus: 100, // custom property
  scoreIncrement: 1,
  healthDecrement: 25,
  difficulty: "easy",
  userPlay: false,
  gameComplete: false,  
  highScore: 0
};
```
##### Customized User Object
```javascript
{
  name: "Solid State", // default override
  color: "blue", // custom property
  health: 100,
  currentScore: 0
};
```

#### Incrementing Score
```javascript
incrementScore();
```

This function will increment the score based on the increment value set in the `Game` object.

It also returns an updated `User` object.

#### Decrementing Health
```javascript
decrementHealth(func);
```

This function will decrement the player's score based on the decrement value set in the `Game` object and will automatically trigger `loseLife()` and `gameOver()` based on the game parameters set in the `Game` object.

The `decrementHealth()` function returns an updated `User` object when called and accepts a callback function that is executed on game over as a parameter.

#### Losing Life
```javascript
loseLife(func)
```
`loseLife()` is automatically called when the health of a life has been decremented to 0. You can force the loss of a life by calling this function manually.

The `loseLife()` function accepts a callback function that is executed on game over as a parameter.

#### Game Over
```javascript
gameOver(func);
```
`gameOver()` is automatically called on the loss of the player's last life. The `gameOver()` function can be called manually and accepts a callback function as a parameter.

#### Reset Game
```javascript
resetGame();
```
`resetGame()` is automatically called on game over. You can force a game reset by calling this function manually.
