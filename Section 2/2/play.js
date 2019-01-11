const person = {
    name: 'Albert',
    age: 29,
    greet() { 
        console.log('Hi I am ' + this.name);
    }
};

const hobbies = ["Sports", "Cooking"];
// for (let hobby in hobbies) {
//     console.log(hobby);
// }
console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
console.log(hobbies);


