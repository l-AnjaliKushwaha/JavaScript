const myNums = [1, 2, 3]

// const myTotal = myNums.reduce((acc, currval) => {
//             console.log(`acc: ${acc} and currval: ${currval}`);
//             return acc + currval

// }, 0)

const myTotal = myNums.reduce((acc, curr) => acc + curr, 0)

console.log(myTotal);


const shoppingCard = [
            {
                        itemName: "js course",
                        price: 999
            },
            {
                        itemName: "mobile dev course",
                        price: 5999
            },
            {
                        itemName: "data scince course",
                        price: 999
            },
            {
                        itemName: "py course",
                        price: 1599
            },
            {
                        itemName: "js course",
                        price: 2000
            },
]

const priceToPay = shoppingCard.reduce((acc, item) => acc + item.price, 0)

console.log(priceToPay);