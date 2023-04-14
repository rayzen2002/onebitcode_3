const dayjs = require('dayjs')
const relativeTime = require('dayjs/plugin/relativeTime')


// YYYY-MM-DD
//console.log(dayjs('2005-02-01'))

function birthday(date){
    dayjs.extend(relativeTime)
    const data =  dayjs(date)
    const today = dayjs()
  
    const dataDiff = today.subtract(data.year() , 'year')
    const years = dataDiff.year()
    let nextBirthday = data.add(years  , 'year')
    
    if(nextBirthday.diff(today) < 0 ){
        nextBirthday = nextBirthday.add(1 , 'year')
        
    }

    const nextBirthdayDate = nextBirthday.format('DD-MM-YYYY')

    const daysToBirthday = nextBirthday.diff(today , 'day')

    
    console.log(`Seu proximo aniversario vai ser em: ${nextBirthdayDate}`)
    console.log( `Faltam ${daysToBirthday} dias para o seu aniversario`)
}

console.log(birthday('1996-12-18'))