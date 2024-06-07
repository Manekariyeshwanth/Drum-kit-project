
var numberofbottles= document.querySelectorAll(".drum").length;
 for(var i=0;i<numberofbottles;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function(){

    var buttonInnerhtml= this.innerHTML;

    makesound(buttonInnerhtml);
    animation(buttonInnerhtml);
    
     });

}
 
document.addEventListener("keypress",function(event){
     
makesound(event.key);
animation(evnt.key);

}
    )

function makesound(key) {

    switch (key) {
        case "w":
            var sound1 = new Audio("sounds/crash.mp3");
            sound1.play();
            break;
         case "a":
            var sound7 = new Audio("sounds/kick-bass.mp3");
            sound7.play();
            break;
        case "s":
            var sound6 = new Audio("sounds/snare.mp3");
            sound6.play();
            break;
        case "d":
            var sound5= new Audio("sounds/tom-1.mp3");
            sound5.play();
            break;
        case "j":
            var sound2 = new Audio("sounds/tom-2.mp3");
            sound2.play();
            break;
        case "k":
            var sound3 = new Audio("sounds/tom-3.mp3");
            sound3.play();
            break;
        case "l":
            var sound4 = new Audio("sounds/tom-4.mp3");
            sound4.play();
            break;                 
            default:
                console.log(buttonInnerhtml);
            break;
    
}
}
 function animation(currentkey){
    var activebutton = document.querySelector("."+ currentkey);
    activebutton.classList.add("pressed");
    
    setTimeout(function(){
        activebutton.classList.remove("pressed");

    }, 100);

 }