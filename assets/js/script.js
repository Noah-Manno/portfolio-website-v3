var app = document.getElementById('app')

var Typewriter = new Typewriter(app, {
    loop: false,
    delay: 75,
});

Typewriter 
    .pauseFor(50)
    .typeString('<> Creative Web Developer </>')
    .start()