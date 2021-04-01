class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val(); 
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }

  play(){
    form.greeting.hide()
    textSize(30)
    text("game Start!",130, 99.99999999)
    var ypos = 160
    Player.getInfo()
    if(allPlayers !== undefined){
      var ypos = 160
    for(var pl in allPlayers){
      if(pl === "player"+player.index){
        fill("red")
      }else{
        fill("lime")
      }

      textSize(20)
      text(allPlayers[pl].name+" : "+allPlayers[pl].distance,130,ypos)

      ypos = ypos+25
    }
  }
    
    if(keyDown(UP_ARROW)&& player.index !== null){
      player.distance = player.distance+50
      player.update()
    }
  }
}
