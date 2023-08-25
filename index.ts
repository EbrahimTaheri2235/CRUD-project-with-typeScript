type userType = {
    id : string | number
    firstName : string
    lastName : string
    age : number
    Gender : "male" | "female"
    phoneNumber : number | string
    maritalStatus? : "married" | "single"
    occupation? : string
    Height? : number | string
    weight? : number | string
}

const userList: Array<userType> = [
    {
        id : 222354,
        firstName : "alireza",
        lastName : "sabet",
        age : 25,
        Gender : "male",
        phoneNumber : "09377514545",
        maritalStatus : "single",
        Height : "180 cm",
        weight : "80 kg"
    },
    {
        id : 88945 ,
        firstName : "babak",
        lastName : "keshtvarz",
        age : 42,
        Gender : "male",
        phoneNumber : "09178546161",
        maritalStatus : "married",
        Height : "165 cm",
        weight : "78 kg"
    }
]




//creat user
const creatUser = (user : userType): void => {
    userList.push(user)
}


creatUser({
        id : "nmd-8989898",
        firstName : "mohsen",
        lastName : "rezaei",
        age : 32,
        Gender : "male",
        phoneNumber : "09389956451",
    })
    

//update user 
const updateUser = (id : userType["id"] , user: userType) => {
    const userIndex : number = userList.findIndex((item) => item.id === id)
    userList[userIndex] = {...userList[userIndex] , ...user} 
}

updateUser(88945 , {
        firstName : "yalda",
        lastName : "saghayei",
        age : 18,
        Gender : "female",
        phoneNumber : "09178956666",
        maritalStatus : "single",
        Height : "165 cm",
        weight : "50 kg"
})

//delete user 
const deleteUser = (id:userType["id"]) => {
    const deleteUser = userList.filter((item) => item.id !== id)
    return deleteUser
}

console.log( deleteUser(88945));
userList.sort()
console.log(userList)