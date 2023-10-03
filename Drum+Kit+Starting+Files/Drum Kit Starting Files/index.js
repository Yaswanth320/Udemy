
// Detecting button key press

buttons = document.querySelectorAll(".drum");
button = document.querySelector(".drum");
buttons.forEach((button) => {   
    button.addEventListener('click', function() {
        makesound(this.innerHTML);  
        chageButton(this.innerHTML); 
    })
});

// Detetcting keyboard key press

document.addEventListener("keypress", function(event){
    makesound(event.key);   
});

// Make sound function to play add audio file on event

function makesound(key){
    switch (key) {
        case "w":
            var audio = new Audio("./sounds/tom-1.mp3");
            audio.play();
            break;
        case "a":
            var audio = new Audio("./sounds/tom-2.mp3");
            audio.play();
            break;
        case "s":
            var audio = new Audio("./sounds/tom-3.mp3");
            audio.play();
            break;
        case "d":
            var audio = new Audio("./sounds/tom-4.mp3");
            audio.play();
            break;
        case "j":
            var audio = new Audio("./sounds/snare.mp3");
            audio.play();
            break;
        case "k":
            var audio = new Audio("./sounds/crash.mp3");
            audio.play();
            break;
        case "l":
            var audio = new Audio("./sounds/kick-bass.mp3");
            audio.play();
            break;
        default:console.log(key);
            break;
        }
    
        chageButton(key);
}

function chageButton(currentKey){
    var activeButton = document.querySelector("."+currentKey);
    activeButton.classList.add("pressed");
    // setTimeout(callbackfunction(), timeinterval)
    // change button style back to normal after 100ms
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100)
}