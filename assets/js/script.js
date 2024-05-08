// Grabbing the headline element
var app = document.getElementById('app')
// Creating a new typewriter effect
var Typewriter = new Typewriter(app, {
    loop: false,
    delay: 75,
});
// utilizing methods
Typewriter 
    .pauseFor(50)
    .typeString('<> Creative Web Developer </>')
    .start()