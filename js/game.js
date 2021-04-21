//create a game class
class Game {
    constructor() {

    }
    //read gameState from database
    getState() {
        database.ref('gameState').on("value", function (read) {
            gameState = read.val();
        })
    }

    //update state in database
    update(state) {
        database.ref('/').update({
            gameState: state
        });
    }


    //create a start function to start the game
    start() {
        if (gameState === 0) {

            player = new Player();
            player.getCount();
            form = new Form();
            form.display();

        }
    }

    play() {
        form.hide();
        Player.getPlayerinfo();

        if(allPlayers !== undefined){
            var display_Position = 130;
            for(var plr in allPlayers){
            if(plr === "player" + player.index ){
                fill("red")
            }else{
                fill("green")
            }

                display_Position +=25;
                textSize(30);
                text(allPlayers[plr].name + " = "  + allPlayers[plr].distance,120,display_Position)
            }
          


        }


        if(keyCode === UP_ARROW && player.index !== null){
            player.distance = player.distance + 50;
            player.update();
        }

        

    }
}
