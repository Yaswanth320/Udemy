
let random1 = Math.floor(Math.random() * 6) + 1;
let random2 = Math.floor(Math.random() * 6) + 1;

const img1 = document.querySelector(".img1").setAttribute("src", "./images/dice"+random1+".png");
const img2 = document.querySelector(".img2").setAttribute("src", "./images/dice"+random2+".png");

const header = document.querySelector("h1");

if(random1 > random2){
    header.textContent="player 1 wins!";
}else if(random1 < random2){
    header.textContent = "player 2 wins!";
}else{
    header.textContent = "Draw";
}