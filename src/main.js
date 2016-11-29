var game;

var mGrab, mLetGo;
var targetGoal;

// Wait for DOM to load
function init() {
    game = new Game();
    
    // Initialize Mouse position storage
    mGrab = Matter.Vector.create(0, 0);
    mLettGo = Matter.Vector.create(0, 0);
    
    var play = new playState();
    var menu = new menuState();

    game.addState("play", play);
    game.addState("pause", menu);
    game.setState("play");
    
    
    // Up arrow
    var arrowKeyObject = keyboard(38);
    arrowKeyObject.press = function() {
      console.log("up arrow pressed");
        game.setState("pause");
    };

    arrowKeyObject.release = function() {
        console.log("key was let go");
        game.setState("play");
    };
    
//    var mouseKeyObject = mouse
    
}

//var activeSprites = [];
//var physicsBodies = [];
//function createSprite() {
//    return {
//        sprite: new SpriteObject(), body: new PhysicsObject()
//    };
//}