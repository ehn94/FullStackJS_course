x = "Det her er hoisting"

console.log(x);

var x; 

isItHoisted();

function isItHoisted() {
    console.log("Yes!");
}