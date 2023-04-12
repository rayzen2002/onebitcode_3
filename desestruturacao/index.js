const person = {
    name : "Luke" ,
    job : "Farmer",
    parents: ["Anakin" , "Padme" , "Divorced"]
}

const { job } = person
console.log(job)

const { parents } = person
console.log(parents)

const [father , mother , status] = parents

console.log(father)
console.log(mother)
console.log(status)

function createUser({ name , job , parents }){
    const id = Math.floor((Math.random() * 9999))
    parentsWithA = parents.filter(e => e[0] === 'A')
    return {
        name,
        job,
        parentsWithA,
        id
    }
}

const luke = createUser(person)
console.log(luke)