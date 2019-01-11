const person = {
    name: 'Albert',
    age: 29,
    greet() { 
        console.log('Hi I am ' + this.name);
    }
};

const printName = ({ name }) => {
    console.log(name);
}

printName(person)
const {name, age} = person;
console.log(name,age);

// ---------------------------------------

const hobbies = ["Sports", "Cooking"];
const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

// for (let hobby in hobbies) {
//     console.log(hobby);
// }
// console.log(hobbies.map(hobby => 'Hobby: ' + hobby));
// console.log(hobbies);

// hobbies.push('Programming');
// console.log(hobbies);


// ---------------------------------------
const copiedArray = [...hobbies]; //... Remove the properties around it
// console.log(copiedArray);


// --------------------------------------- // you can add in array without getting errors
const toArray = (...args) => {
    return args;
}
// console.log(toArray(1,2,3));

// ---------------------------------------

