let a=33
console.log(a)
console.log(typeof(a))

let b=Number(a);
console.log(b)
console.log(typeof(b))   // one way to use typeof()

a="33b"
b=Number(a);
console.log(typeof b);   //second way to use typeof 
console.log(b);         // will give NaN---> not a number

a=null;
b=a;
console.log(b);    //null
console.log(typeof b);   //object

a=undefined
b=a
console.log(a);
console.log(b)
console.log(typeof a)
console.log(typeof b)

a=true
console.log(a)
b=Number(a)
console.log(b)
b=false
a=Number(b)
console.log(a)

// "33"(string)=>33(number)
// "33abc"(string) => NaN(number)-------> NaN is having a datatype of number
//true=>1
//false=>0

let ar=1;
let br=Boolean(ar)
console.log(br)     //true
ar=0
br=Boolean(ar)
console.log(br)    //false

ar=""
br=Boolean(ar)
console.log(br);    //false

ar=" "
br=Boolean(ar)
console.log(br);    //true

a=-1
b=Boolean(a)
console.log(b);

a="Aryan"
b=Boolean(a)
console.log(b)

a=12
b=String(a)
console.log(a)
console.log(b)
console.log(typeof a)
console.log(typeof b)


