// const div = `<div class="text">Привет></div>`
// console.log(div.length)
// console.log(div.charAt(2))
// console.log(div.indexOf('te'))
// console.log(div.toLocaleLowerCase().startsWith('<div'))
// console.log(div.trim()) 

// function personLog (s, name, age) {
//     age < 0 ? age = 'Ещё не родится' : age=age
//     return `${s[0]}${name}${s[1]}${age}${s[2]}`
// }
// const pName = 'Den'
// const pName2 = 'Max'
// const pAge = 40
// const pAge2 = -1
// const out = personLog`Имя: ${pName}, Возраст: ${pAge}!`
// const out2 = personLog`Имя: ${pName2}, Возраст: ${pAge2}!`
// console.log(out)
// console.log(out2)

let counter = 0

// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval)
//         console.log('Fin');
//     }else{
//         console.log(++counter)
//     }
// }, 1000)

// Тоже самое:
const interval = setInterval(() => {
    counter === 5 ? clearInterval(interval) : console.log(++counter)
}, 1000)