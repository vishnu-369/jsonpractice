const userData = [
    {
        "username": "vishnu",
        "age": 25,
        "isAdmin": true

    },
    {
        "username": "varun",
        "age": 35,
        "isAdmin": false

    }
];


const stringJson = JSON.stringify(userData)
//console.log(stringJson)

const jsonObject = JSON.parse(stringJson)


console.log(jsonObject[0].username)
console.log(jsonObject[0].age)




