var petOnSale = "chinchilla";
var ordersArray = [
    ["rat", 2],
    ["chinchilla", 1],
    ["hamster", 2],
    ["chinchilla", 50],
];
// Write your code below:
var Pet;
(function (Pet) {
    Pet[Pet["Hamster"] = 0] = "Hamster";
    Pet[Pet["Rat"] = 1] = "Rat";
    Pet[Pet["Chinchilla"] = 2] = "Chinchilla";
    Pet[Pet["Tarantula"] = 3] = "Tarantula";
})(Pet || (Pet = {}));
var petOnSaleTS = Pet.Chinchilla;
var ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50],
];
var petOnSale = "chinchilla";
var ordersArray = [
    ["rat", 2],
    ["chinchilla", 1],
    ["hamster", 2],
    ["chinchilla", 50],
];
// Write your code below:
(function (Pet) {
    Pet["Hamster"] = "HAMSTER";
    Pet["Rat"] = "RAT";
    Pet["Chinchilla"] = "CHINCHILLA";
    Pet["Tarantula"] = "TARANTULA";
})(Pet || (Pet = {}));
var petOnSaleTS = Pet.Chinchilla;
var ordersArrayTS = [
    [Pet.Rat, 2],
    [Pet.Chinchilla, 1],
    [Pet.Hamster, 2],
    [Pet.Chinchilla, 50],
];
ordersArrayTS.push(["HAMSTER", 1]);
//in the enum Pet statement, you cannot use 'HAMSTER' as the enum value. You must use Pet.Hamster instead.
function sayHappyBirthdayWithObject(personObject) {
    var output = "";
    output += "Happy Birthday " + personObject.name + "! ";
    output += "You are now " + personObject.age + " years old! ";
    output +=
        "Your birthday wish was to receive " +
            personObject.giftWish +
            ". And guess what? You will ";
    if (!personObject.success) {
        output += "not ";
    }
    output += "receive it! \n";
    console.log(output);
}
var birthdayBabies = [
    { name: "Liam", age: 0, giftWish: "karate skills", success: false },
    { name: "Olivia", age: 0, giftWish: "a bright future", success: true },
    { name: "Ava", age: 0, giftWish: "$0.25", success: true },
];
birthdayBabies.forEach(sayHappyBirthdayWithObject);
var codecademyCoordinates = [40, 43.2, "N", 73, 59.8, "W"];
var bermudaTCoordinates = [25, 0, "N", 71, 0, "W"];
