let freq = {}
var pesos = []
function media(...numbers){
   return (numbers.reduce((accum , val) => accum + val))/numbers.length 
    
}
function mediaPonderada(...numbers){
    var somaDosPesos = 0
    var somaDosValores = 0

    for (var i = 0 ; i < numbers.length ; i++){
        var valor = numbers[i]
        freq[valor] = (freq[valor] || 0) + 1
    }

    for (var i = 0 ; i < numbers.length ; i++){
        var valor = numbers[i]
        pesos.push (freq[valor])
    }

    for(var i = 0 ; i< numbers.length ; i++){
        somaDosValores = pesos[i] * numbers[i]
        somaDosPesos += pesos[i]
    }

    return somaDosValores / somaDosPesos
}
function mediana(...numbers){
    const sortedNumbers =  numbers.sort((a , b) => a - b)
    if (numbers.length % 2 !== 0){
        return sortedNumbers[(((numbers.length) + 1) / 2) - 1]
    }else if(numbers.length % 2 === 0){
        return media(sortedNumbers[(numbers.length / 2) - 1] , sortedNumbers[numbers.length / 2])
    }
}

function moda(...numbers){
    let moda = 0
    for (var i = 0 ; i < numbers.length ; i++){
        var valor = numbers[i]
        freq[valor] = (freq[valor] || 0) + 1
    }
    
    for (let valor in freq){
        if(freq[valor] > moda){
            moda = valor
        }
    }
    return moda
}

