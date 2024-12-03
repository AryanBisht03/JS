//string interpolation----> using + sign is now outdated insted of it , use string interpolation
// string interpolation sign 
// console.log(`nnanakl` ${value_name})
const name="Aryan Bisht"
let age=23
let address="344 ashoke nagar roorkee"
// premitive way and outdated way
console.log(`the name of the user is ${name}, his age is ${age} and his address is ${address}`)




//some string functions
//another way to initialize a string but in a heap and since string is a premitive datatype therefore
// the original value does not change here
const prompt=require("prompt-sync")();
const name_of_person=prompt("Enter the name of a person")
const new_name=new String(name_of_person)
console.log(new_name)




// trim() function in strings
// but it will not remove the spaces which are in between
const a ="       Aryan     bisht       "
console.log(a)
console.log(a.trim())




// trimend() function in strings removes the white spaces from the end.
// trimRight()==trimEnd()
const b="     Aryan Bisht       "
console.log(b+" "+b.length)
console.log(b.trimEnd()+" "+b.length)



//trimLeft() function in string removes white spaces from the left or start
const c="      Aryan Bisht       "
console.log(c)
console.log(c.trimLeft())


