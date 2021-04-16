class Form{
    constructor(){

}

 display(){
var title = createElement('h1')
title.position(550,100)
title.html("car racing")

var input = createInput("hasini")
input.position(350,200)

var button = createButton("click to play")
button.position(400,270)

var name=input.value();

var greeting = createElement('h2')
greeting.position(400,300)


button.mousePressed(function(){
    button.hide();
    input.hide();

    var name = input.value();

    player = new Player()

    playerCount+=1;
    player.update(name)
    player.updateCount(playerCount)
    greeting.html("Welcome "+name)


})
    
    


   
 }
}
