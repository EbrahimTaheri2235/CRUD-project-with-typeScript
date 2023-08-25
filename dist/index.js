"use strict";
const userList = [
    {
        id: 222354,
        firstName: "alireza",
        lastName: "sabet",
        age: 25,
        Gender: "male",
        phoneNumber: "09377514545",
        maritalStatus: "single",
        Height: "180 cm",
        weight: "80 kg"
    },
    {
        id: 88945,
        firstName: "babak",
        lastName: "keshtvarz",
        age: 42,
        Gender: "male",
        phoneNumber: "09178546161",
        maritalStatus: "married",
        Height: "165 cm",
        weight: "78 kg"
    }
];
//creat user
const creatUser = (user) => {
    userList.push(user);
};
creatUser({
    id: "nmd-8989898",
    firstName: "mohsen",
    lastName: "rezaei",
    age: 32,
    Gender: "male",
    phoneNumber: "09389956451",
});
//update user 
const updateUser = (id, user) => {
    const userIndex = userList.findIndex((item) => item.id === id);
    userList[userIndex] = { ...userList[userIndex], ...user };
};
updateUser(88945, {
    firstName: "yalda",
    lastName: "saghayei",
    age: 18,
    Gender: "female",
    phoneNumber: "09178956666",
    maritalStatus: "single",
    Height: "165 cm",
    weight: "50 kg"
});
//delete user 
const deleteUser = (id) => {
    const deleteUser = userList.filter((item) => item.id !== id);
    return deleteUser;
};
console.log(deleteUser(88945));
userList.sort();
console.log(userList);
//# sourceMappingURL=index.js.map