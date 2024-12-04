marvel_heros=["Thor","Ironman","Captain America"]
dc_heros=["Superman","Batman","Flash"]
arr_of_heros=[...marvel_heros,...dc_heros]
console.log(marvel_heros)
console.log(dc_heros)
console.log(arr_of_heros)


//flat() function is used to create a single array by making other inside array a singhle
const arr=[1,2,3,[4,5,6],11,22,33,[44,55,66,[77,88,99,10,[1,2,3,4,5]]]]
const new_arr=arr.flat(Infinity)    //infinity is the depth
console.log(new_arr)