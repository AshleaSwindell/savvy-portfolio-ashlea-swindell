var root = document.querySelector( "#root" );
var orderedList = "<ol>";
var fizzbuzz = function fizzbuzz( x ){
    if( x % 15 === 0 ){
        orderedList += "FizzBuzz";
    }
    else if( x % 3 === 0 ){
        orderedList += "Fizz";
    }
    else if( x % 5 === 0 ){
        orderedList += "Buzz";
    }
    else{
        orderedList += i;
    }
};

for( let i = 1; i < 101; i++ ){
    orderedList += "<li>";
    fizzbuzz( i );

    orderedList += "</li>";
}
orderedList += "</ol>";

root.innerHTML = orderedList;
