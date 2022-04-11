const startNode = document.getElementById("inside-trip");
const endNode = document.getElementById("kimura");
const btn = document.getElementById("play");

const insideTrip = document.getElementById("inside-trip");
var kimura = document.getElementById("kimura");

insideTrip.addEventListener("click", () => {
    kimura.innerText = "Playing..."
})