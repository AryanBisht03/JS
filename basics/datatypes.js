console.log("Hello Aryan Bisht")

//const
//let 
//var-----> advisable to not use it since it is not bound to any scope.

const a=12;
let b="Aryan"
var c="bisht"
d=45;   // this will also work but you it is not a good practice,
// will give block scope and functional scope issue.

console.log(a);
console.log(b);
console.log(c);
console.log(d);

//this is a new way and time saving way to print the values.
console.table([a,b,c,d]);