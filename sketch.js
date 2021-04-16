var playerCount = 0;
var database,position;


var game,player,form
function setup(){
    database = firebase.database();
    createCanvas(500,500);
    
    form = new Form()
    form.display();


}

function draw(){
    background("lightblue");
    

    
    drawSprites();
}

