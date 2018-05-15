var subtitle = document.querySelector( "h2" );

var getUserName = function getUserName(){
    var userName = prompt( "What's your name?" );


    if( !userName ){
        getUserName();
    }
    else{
        console.log( subtitle.textContent );
        subtitle.textContent += " " + userName ;
    }
};

getUserName();
