const nums = [1,2,3]

// const total = nums.reduce(function (acc, currval) {
//     console.log(`acc: ${acc} and currval: ${currval}`);
//     return acc + currval
// }, 0)

const total = nums.reduce((acc, currval) => acc+currval, 0)


console.log(total);

const shoppingCart = [
    {
        itemname: "js cource",
        price: 2999
    },
    {
        itemname: "py cource",
        price: 999
    },
    {
        itemname: "mobile dev cource",
        price: 5999
    },
    {
        itemname: "data scientist",
        price: 12999
    },
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);
