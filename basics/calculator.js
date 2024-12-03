// creating a calculator
// will do basic operations like-
// addition
// subtraction
// multiplication 
// division

console.log("Welcome to Aryan's calculator")
console.log("\n")
console.log("***Operations***")
console.log("1.Add")
console.log("2.Subtract")
console.log("3.Multiply")
console.log("4.Divide")
console.log("5.Remainder")
console.log("6.power")
console.log("\n")


const prompt=require("prompt-sync")();
let a;
let b;
a=Number(prompt("Enter first number"))
b=Number(prompt("Enter second number"))
function add_2_numbers(a,b)
{
    return a+b;
}

function subbtract_2_numbers(a,b)
{
    return a-b;
}
function multiply_2_numbers(a,b)
{
    return a*b;
}
function divide_2_numbers(a,b)
{
    if(b!=0)
    {
        return a/b;
    }
    else
    return null;
    
}
function remainder_2_numbers(a,b)
{
    return a%b;
}

function power(a,n)
{
    return a**n;
}

let choice;
choice=prompt("enter the operation you wanted to perform")
switch(Number(choice))
{
    case 1:
        let sumo=add_2_numbers(a,b)
        console.log(sumo)
        break
    
    case 2:
            let sub=subbtract_2_numbers(a,b)
            console.log(sub)
            break
    case 3:
            let mul=multiply_2_numbers(a,b)
            console.log(mul)
          break
            case 4:
                let Divide=divide_2_numbers(a,b)
                console.log(Divide)
            break
            case 5:
                    let Remainder=remainder_2_numbers(a,b)
                    console.log(Remainder)
                break
            case 6:
                   let n=prompt("Enter the power you wanted")
                    let powerf=power(a,n)
                    console.log(powerf)
            break
            default:
                console.log("Invalid choice")
}