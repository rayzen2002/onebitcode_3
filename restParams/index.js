function sum(...numbers){
    return numbers.reduce((accum , num)=>accum + num , 0)
}

console.log(sum (2,2))
console.log(sum (2,2,3,3,3,3,3))
console.log(sum (2,2,34543,24322,1323,22))