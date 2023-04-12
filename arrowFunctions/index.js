function normalSum(a , b){
    return a + b
}

console.log(`Soma normal: ${normalSum(2 , 2)}`)

const annonymousSum = function (a , b){
    return a + b
}

console.log(`Soma anonima: ${annonymousSum(2 , 2)}`)

const arrowSum = (a , b) => a + b

console.log(`Soma arrow: ${arrowSum(2 , 2)}`)
