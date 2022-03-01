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

// let counter = 0

// const interval = setInterval(function() {
//     if (counter === 5) {
//         clearInterval(interval)
//         console.log('Fin');
//     }else{
//         console.log(++counter)
//     }
// }, 1000)

// Тоже самое:
// const interval = setInterval(() => {
//     counter === 5 ? clearInterval(interval) : console.log(++counter)
// }, 1000)


// const arr = [1, 2, 3, 4, 5]
// const pow = arr.map(num => num ** 2)  // (5) [1, 4, 9, 16, 25]
// const pow2 = num => num ** 2
// const pow20 = arr.map(pow2)  // (5) [1, 4, 9, 16, 25]
// const pow21 = arr.map(pow2).map(Math.sqrt)  // (5) [1, 2, 3, 4, 5]
// // console.log(pow);
// // console.log(pow20);
// // console.log(pow21);
// const filteredAr = pow20.filter(num => num < 10)  //(3) [1, 4, 9]
// console.log(filteredAr);

// const people = [
//     {name: 'Den', bank: 5000},
//     {name: 'Max', bank: 4000},
//     {name: 'Olya', bank: 4500}
// ]

// const allBank = people.reduce((acc, person) => {
//     acc += person.bank
//     return acc
// }, 0)
// console.log(allBank);  // 13500

// const allBank = people
//     .filter(person => person.bank >=4500)
//     .reduce((acc, person) => acc += person.bank, 0) // 0 - начальное значание

// console.log(allBank);  // 9500

const person = {
    name: 'Den',
    age: 40,
    isProgrammer: true,
    languages: ['ru', 'en', 'ua'],
    'hard key': 'Hard value',
    ['key_' + (1 + 3)]: 'sum key',     // key_4
    greet() {console.log(`Hi from ${this.name}`);},
}

const max = Object.create(person)
max.name = 'Max'
max.age = 14


console.log(max);
// console.log(person['age']);
// console.log(person['hard key']);
// console.log(person['key_4']);
// person.greet()
// person. age++
// person.languages.push('md')
// console.log(person);

/* Консоль:
Den
79 40
80 Hard value
81 sum key
74 Hi from Den
{name: 'Den', age: 41, isProgrammer: true, languages: Array(4), hard key: 'Hard value', …}
age: 41
greet: ƒ greet()
hard key: "Hard value"
isProgrammer: true
key_4: "sum key"
languages: (4) ['ru', 'en', 'ua', 'md']
name: "Den"
*/

// const {name, age, isProgrammer, languages} = person
// console.log(name, personAge, isProgrammer, languages);  // Den 40 true (3) ['ru', 'en', 'ua']
// const {name, age: personAge = 41, isProgrammer, languages} = person
// console.log(name, personAge, isProgrammer, languages); // Den 40 true (3) ['ru', 'en', 'ua'] 41 - если в объекте age: undefind

// const logger = {
//     keys(obj) {
//         console.log('object keys:', Object.keys(obj));
//     }
// }
// logger.keys(person)  // object keys: (7) ['name', 'age', 'isProgrammer', 'languages', 'hard key', 'key_4', 'greet']

// const logger = {
//     keys() {
//         console.log('object keys:', Object.keys(this));
//     },
//     keysAndValues() {
//         Object.keys(this).forEach(key => {
//            console.log(`"${key}": ${this[key]}`) 
//         })        
//     },
//     withParams(top = false, between = false, bottom = false) {
//         if (top) {
//             console.log('---------Start------------');
//         }
//         Object.keys(this).forEach((key, index, Array) => {
//             console.log(`"${key}": ${this[key]}`)
//             if (between && index !== Array.length - 1)
//                 console.log('--------------------------') 
//          })
//         if (bottom) {
//             console.log('-----------END------------')
//         }
//     }
// }
// const bound = logger.keys.bind(logger)
// bound()     // object keys: ['keys']

// const bound = logger.keys.bind(person)  // создаём ф-цию и вызываем, когда хотим
// bound()   // object keys: (7) ['name', 'age', 'isProgrammer', 'languages', 'hard key', 'key_4', 'greet']

// logger.keys.call(person)   // вызывается сразу
// logger.keysAndValues.call(person)  
/* Консоль"name": Den
app.js:121 "age": 40
app.js:121 "isProgrammer": true
app.js:121 "languages": ru,en,ua
app.js:121 "hard key": Hard value
app.js:121 "key_4": sum key
app.js:121 "greet": greet() {console.log(`Hi from ${this.name}`);}
*/

// logger.withParams.call(person, true, true, true)
// logger.withParams.apply(person, [true, true, true])

// const nameUser = document.getElementById('name')
// const thead = document.getElementsByClassName('thead')[0]
// console.log(thead)
// const thead = document.querySelector('.thead')
// const thead = document.querySelector('#t_head')
// console.log(thead)
// const name2 = nameUser.nextElementSibling
// console.log(name2)

// setTimeout(() => {
//     addStyle(name2, 'Денисович', 'yellow')
// }, 4000)

// setTimeout(() => {
//     addStyle(nameUser, 'Максим')
// }, 3000)

// function addStyle(node, text, backgroundColor) {
//     // console.dir(nameUser.textContent);
//     node.textContent = text
//     node.style.textAlign = 'center'
//     node.style.color = 'green'
//     if (backgroundColor) {
//        node.style.backgroundColor = backgroundColor
//     }
    
// }

// nameUser.onclick = () => {
//     if (nameUser.style.color === 'green') {
//         nameUser.style.color = '#000'
//         nameUser.style.backgroundColor = '#fff'
//     } else {
//         nameUser.style.color = 'green'
//         nameUser.style.backgroundColor = '#000'
//     }
// }

// name2.addEventListener('dblclick', () => {
//     if (name2.style.color === 'green') {
//         name2.style.color = '#000'
//         name2.style.backgroundColor = '#fff'
//     } else {
//         name2.style.color = 'green'
//         name2.style.backgroundColor = '#000'
//     }
// })




