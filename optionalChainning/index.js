const user = {
    name: "John Doe",
    email: "john@gmail.com",
    friends: [{
        name: "Mary",
        address: {
            street: "Anywhere",
            number: "322"
        }
}],
    age: "64",
    phone: {
        countryCode: "+55",
        ddd: "85",
        number: "322644966"
    }
}

console.log(user.friends[0].phone?.ddd)
console.log(user.brothers?.[2].phone?.ddd)