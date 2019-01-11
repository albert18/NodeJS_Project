// const - never plan on changing like (let).


const name = 'Max';
let age = 29;
const hasHobbies = true;


age = 30;



const summarizeUser = (userName, userAge, userHasHobby) => { //Create arrow function =>
    return 'Name is ' + userName + ' and age is ' + userAge + ' and the user has some hobbies ' + userHasHobby
};

const add = (a,b) => a + b; // some shorcut of arrow function with multiple argument
const addOne = a => a + 1; // some shorcut of arrow function with single argument
const addRandom = () => 1 + 4; // some shorcut of arrow function with without giving any argument


// console.log(addOne(2));
// console.log(add(2,2))
console.log(addRandom());
console.log(summarizeUser(name, age, hasHobbies));