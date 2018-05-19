var subtitle = document.querySelector( "h2" );

var userInput = document.querySelector( "#user-input" );
var originalSubtitle = subtitle.innerHTML;

userInput.addEventListener(
    "keyup",
    function greetUser( event ){
        if( event.key === "Enter" ){
            subtitle.innerHTML = originalSubtitle + event.target.value;
        }
    }
);


//
// var getUserName = function getUserName(){
//     var userName = prompt( "What's your name?" );
//
//
//     if( !userName ){
//         getUserName();
//     }
//     else{
//         console.log( subtitle.textContent );
//         subtitle.innerHTML += userName;
//     }
// };
//
// getUserName();
