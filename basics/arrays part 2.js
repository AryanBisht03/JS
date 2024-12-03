// the arrays in JS are dynamic
// the use of unshift() operation.
const a=[1,2,3,4,5]
console.log(a.length)
a.unshift(9)
console.log(a)
console.log(a.length)

//the use of shift() operation , it will not take any argument and removes the first element from 
// the array
a.shift()
console.log(a)
a.shift()
console.log(a)
a.shift()
console.log(a)
a.shift()
console.log(a)

// includes() method and indexof() method.
const arr=[1,2,3,4,5,6,7,8]
console.log(arr.includes(1)) // true
console.log(arr.includes(23))
console.log(arr.includes(3))
console.log(arr.includes(4))
console.log(arr.includes(5))
console.log(arr.includes(6))
console.log(arr.includes(7))
console.log(arr.includes(8))
console.log(arr.includes(9))  //false



//indexOf() this will give index value of the element --
console.log(arr.indexOf(0)) //-1
console.log(arr.indexOf(1)) // 0
console.log(arr.indexOf(2)) // -1
console.log(arr.indexOf(3))
console.log(arr.indexOf(4))
console.log(arr.indexOf(5))
console.log(arr.indexOf(6))
console.log(arr.indexOf(7))
console.log(arr.indexOf(8))
console.log(arr.indexOf(9))

//join() operation will 
let b=[6,7,8,9,10];
let ar=b.join()
console.log(ar)    // will give the array eleemnts seperated by commas and in string format.
console.log(b)     // will give an arary




// the spread operator
let arr1=[1,2,3,4,5,6,7]
let arr2=[11,22,3,33,44,55,'qweq']
let arr3=[...arr1,...arr2]
console.log(arr1)
console.log(arr2)
console.log(arr3)


console.log(arr1)
console.log(typeof arr1[0])
console.log(arr2)
console.log(typeof arr2[6])
console.log(arr3)
console.log(typeof arr1)