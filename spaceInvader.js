"use strict";

let canvas = document.querySelector("canvas");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
let context = canvas.getContext("2d");

spaceInvader();

function spaceInvader() {
    context.beginPath()
    context.fillStyle = "black"
    context.rect(50,50,300,300)
    context.fill();

    context.beginPath()
    context.fillStyle = "#83f52c"
    context.rect(75,75,250,50)
    context.fill();

    context.beginPath()
    context.fillStyle = "#83f52c"
    context.rect(125,125,150,50)
    context.fill();

    context.beginPath()
    context.fillStyle = "#83f52c"
    context.rect(75,175,250,50)
    context.fill();

    context.beginPath()
    context.fillStyle = "#83f52c"
    context.rect(125,275,150,50)
    context.fill();



}

