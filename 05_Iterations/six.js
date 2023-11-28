            /* Reduce */
// const num = [1,2,3,4]

// const myTotal = num.reduce( (accumulator,currvalue) => {
//     console.log(`acc: ${accumulator} & curr:${currvalue}`);
//     return accumulator + currvalue
// },3 )
// console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc,item) => (acc + item.price),0)
console.log(totalPrice);