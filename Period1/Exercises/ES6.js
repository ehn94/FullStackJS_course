/*const PI = 3. // den er konstant og kan derfor ikke ændres
PI > 3.0 
console.log("Hello");

let a = ["A", "a"];
let b = ["B", "b"];
// Ved brug af let er variablen kun kendt af scopet. Dvs. man undgår hoisting. 
for (let i = 0; i < a.length; i++) {
    let x = a[i]
    
}
for (let i = 0; i < b.length; i++) {
    let y = b[i]
 
}

let callbacks = []
for (let i = 0; i <= 2; i++) {
    callbacks[i] = function () { return i * 2 }
}
callbacks[0]() === 0
callbacks[1]() === 2
callbacks[2]() === 4

// Exercise 2
//1a
let event = [6, 3, 0];
odds  = evens.map(v => v + 1)
pairs = evens.map(v => ({ even: v, odd: v + 1 }))
nums  = evens.map((v, i) => v + i)
//2a
/*
var odds = evens.map(v => {
  v+1
});
*/ 
// Dette virker ikke, da der mangler et return statement indeni blokken. 
/*
var odds = evens.map(v => {
  v+1
});
*/
// Exercise 3a

function Numbers(numbs) {
var self = this;
  self.nums = numbs;
  self.fives = [];
  self.nums.forEach(function (v) {
    
    if (v % 5 === 0) {
       
      self.fives.push(v);
    }
  });
}
var numbers = new Numbers([1,3,5,10,14,20,33,50]);
console.log(numbers.fives);

//Som en arrow function: 

function Numbers(numbs) {
var self = this;
  self.nums = numbs;
  self.fives = [];
  self.nums.forEach((v) =>  {
    
    if (v % 5 === 0) {
       
      self.fives.push(v);
    }
  });
}


// Exercise 3b
// Det hjælper ikke at lave funktionen til en arrow funktionen
var counter = {
    count: 0,
    inc: (() =>{
      this.count++;
    })
  }
var func = counter.inc; //Store "reference" to inc
func();
console.log(counter.count); //Still zero
counter.inc();
console.log(counter.count); //Now one

// Exercise 5
// 5a
function f(x,y,...rest){
  let sum = x + y;
  console.log("Sum: " + sum);

for(let i = 0; i < rest.length; i++)
{
    console.log("rest value " + i + " is a: " + rest[i].constructor.name);
}
}

console.log("First: ") 
f(5,2,true,2,"hello World",[1,2,3],new Date(),{});

//5b
var rest = [true, false,"hello World",[1,2,3],new Date(),{}];
var restParams = [ ...rest];
console.log("Second ")  
f(5,6,...restParams)

//Exercise 7
//7a
let fName = "Kurt";
let lName = "Wonnegut";
let age = 98

Person = {fName, lName, age};

var list = [fName, lName];
[lName, fName] = [fName, lName];
console.log("Exercise 7a: ");
console.log(`First: ${fName}, Last: ${lName}`);

//7b 
function getPerson(){
  return {
    firstName: "Kurt",
    lastName: "Wonnegut",
    gender : "Male",
    email: "kurt@wonnegut.dk",
    phone: "12345",
  }
}
var { firstName, lastName } = getPerson();
console.log("Ex 7b: " + firstName + " " + lastName);

