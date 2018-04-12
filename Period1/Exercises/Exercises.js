let names = ["Lasse", "Emilie", "Ib", "Ida", "Sandie"];
// Opgave 1a

/* function nameFilter(value) {
  return value.length <= 3;
}

var filtered = names.filter(nameFilter);
console.log(filtered);*/
//Opgave 1b
/*
toUpper = function(x){
    return x.toUpperCase();
}

console.log(names.map(toUpper));
*/
//Opgave 2a
/*function filter(array, callback){
       let arrayToReturn = [];

       array.forEach(function(name){
           let shouldInclude = callback(name);
           if(shouldInclude){
               arrayToReturn.push(name);
           };
       });
       return arrayToReturn;
   };

   let names2 = filter(names, function(name){
       return name.length <= 3;
   });

   console.log(names2);*/

//Opgave 2b
/*function myMap(array, callback) {
    let arrayToReturn = [];

    array.forEach(function (name) {
        let shouldInclude = callback(name);
        if (shouldInclude) {
            arrayToReturn.push(name);
        };
    });
    return arrayToReturn;
};

let names2 = myMap(names, function (name) {
    return name.length <= 3;
});
console.log(names2);
*/
//Opgave 3
Array.prototype.myFilter = function(callback){    
    let arrayToReturn = [];
    this.forEach(function(name){
        let shouldInclude = callback(name);
        if(shouldInclude){
            arrayToReturn.push(name);
        };
    });
    return arrayToReturn;
};

let protoFilter = names.myFilter(function(name){
    return name.length >= 3;
})
console.log("Opg 3---Prototype filter")
console.log("ProtoTypeFilter: " + protoFilter + "\n");

Array.prototype.myMap = function (callback){
    let arrayToReturn = [];
    this.forEach(function(name){
        arrayToReturn.push(callback(name));
    });
    return arrayToReturn;
};

let protoMap = names.myMap(function(name){
    return name.toUpperCase();
});
console.log("Opg 3---Prototype map")
console.log("\nProtoTypeMap: " + protoMap + "\n");
console.log("=================================================================")
//Opgave 4a
/*
let names = ["Lars", "Peter", "Jan", "Bo"];
let li = names.map(function(name){
return "<li>" + name + "</li>" ;
});

let liStr = li.join(" ");
console.log("liStr: " + liStr);
*/
//Opgave 4b
/*
let names = [{name:"Lars",phone:"1234567"}, {name: "Peter",phone: "675843"}, {name: "Jan", phone: "98547"},{name: "Bo", phone: "79345"}];

let rows = names.map(function(elem){
    return "<td>" + elem.name + "</td> <td>" + 
    elem.phone + "</td>";
});
let rowStr = rows.join(" "); 
console.log(rowStr);

let table = `<table> <tbody> + $(rows) + </tbody> </table>`
console.log(table);*/