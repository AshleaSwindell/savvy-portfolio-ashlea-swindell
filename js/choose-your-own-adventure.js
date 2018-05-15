var story = {
    "start": "You're feeling a little uneasy, just a gut feeling. Are you going to run away or stay to figure out why the feeling came over you?",

    "run": "You start running, not sure where, just anywhere but there. You see a light coming from the right, are you going to head towards it or go left?",

    "stay": "So you stay right where you, you start observing your surroundings when you hear a growling wolf behind you. Next thing you know he tackles and starts tearing you to shreds. You die.",

    "right": "You start running towards the light, hoping they can help you! Uh oh, that doesnt look like a normal light. You keep getting closer when you hear this strange buzzing noise. You look up to get a better view and you see a UFO, next thing you know it goes black.",

    "left":
    "text": "Your smart. You survive."


};
var root = document.querySelector( "#root" );
var tellStory = function tellStory(){
    var answer = prompt( story.start );

    if( answer === "stay" ){
        document.querySelector( "#root" ).textContent = story[answer];
    }
    else if( answer === "run" ){
        answer = prompt( story[answer] );
        if( answer === "right" || answer === "left" ){
            document.querySelector( "#root" ).textContent = story[answer];
        }
        else{
            tellStory();
        }
    }
    else{
        tellStory();
    }
};

tellStory();

var runStory = function(){
    $( "#output" ).text = story.start["text"];
};
