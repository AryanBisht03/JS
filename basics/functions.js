// implementation of functions in js
// making a simple program of arithmetic operators
 function add_2_numbers(a,b)
 {
    return a+b;
 }

 let a=add_2_numbers(12,12)
 console.log(a)

 // function to subbtract 2 numbers
 function subbtract_2_numbers(a,b)
 {
    return a-b;
 }

 b=subbtract_2_numbers(12,12)
 console.log(b)

 //function to multiply 2 numbers
 function multiply_2_numbers(a,b)
 {
    return a*b;
 }
 c=multiply_2_numbers(12,12)
 console.log(c)

 //divide 2 numbers
 function divide_2_numbers(a,b)
 {
    if(b!=0)
    return a/b
   else{
    console.log("Not dividable")
    return null;
   }
   
 }

 d=divide_2_numbers(12,0)
 console.log(d)