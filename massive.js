const people = [
    {name: 'Den', age: '40', budget: 5000},
    {name: 'Max', age: '14', budget: 3000},
    {name: 'Olya', age: '35', budget: 4000}
]
// ES5
// for (let i=0; i < people.length; i++) {
//     console.log(people[i]);
// }
// // ES6
// for (let person of people) {
//     console.log(person);
// }
// //forEach
// const names = people.forEach(person => console.log(person))
// //map
// const ages = people.map(person => console.log(person.age))
// const agesAdult = people.map(person => person.age > 18)
// console.log(agesAdult);
// //