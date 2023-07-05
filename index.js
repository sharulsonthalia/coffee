const coffeeMenu = require("./coffee_data");

//Prompt 2
const drinks = coffeeMenu.map((item) => {
    return item.name
})

console.log(drinks)

// //Prompt 3
// const underfive = coffeeMenu.filter((item) => {
//     return item.price <= 5) 
//     } 
// })

// console.log(underfive)

const underfive = (item) => {
    return item.price <=5
}

lessthanfive = coffeeMenu.filter(underfive)
console.log(lessthanfive)

/*To get only the names of the drinks <= 5:
const onlynames = (item) => {
    return item.name
}

onlynamez = lessthanfive.map(onlynames)
console.log(onlynamez)*/

//Prompt 4
const evenorodd = coffeeMenu.filter((item) => {
    return item.price % 2 === 0
})

console.log(evenorodd)

//Prompt 5

const totalvalue = (total, item) => {
    return total += item.price
}

const sumtotal = coffeeMenu.reduce(totalvalue,0);

console.log(sumtotal)

//Prompt 6

const seasonal = coffeeMenu.filter((item) => {
    return item.seasonal
})

console.log(seasonal)

//Prompt 7

const beans = seasonal.filter((item) => {
    return item.name = `${item.name} with imported beans`
})

console.log(beans)