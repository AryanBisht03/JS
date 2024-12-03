console.log("Welcome to the concepts of array")
const prompt=require("prompt-sync")();
let n=Number(prompt("enter the number of elements you wanted in your array"))
let array=[]
console.log("enter the elements")
for(let i=0;i<n;i++)
{
    let element=Number(prompt())
    array.push(element)
}
console.log("The elements of the array are")
for(let i=0;i<array.length;i++)
{
    console.log(array[i])
}