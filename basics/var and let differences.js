// # difference one
// in var we can redeclare the variabale
var a="aryan"
var a="a"
var a=34
console.log(a)


// in let we can not redeclare the variabale
// let a="aryan"
// let a="aryan"
// let a="a"
// let a=34
// console.log(a)



// difference 2
// if you print var data before initiazing it then it will not give an error, but it stores 0 in it.
// console.log(arr)
// var a="Aryan"

// //if you print let data before initiazing it then it will give an error.
// console.log(arr)
// var a="Aryan"

//difference 3
// scope of var is global whereas scope of let is block or function.
// therefore accessing let from outside the block or function will give error

function disp()
{
    if(true)
    {
       var a="Aryan"
    let b="Bisht"
    }
    console.log(a);
    // console.log(b);   // will give errror
}
disp();
