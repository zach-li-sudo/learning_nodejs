const person = {
    name: 'tom',
    age: 43,

    greetNotWork: () => {
        console.log(`Hi, I'm ${this.name}`);
    },

    greet1: function() {
        console.log(`Hi, I'm ${this.name}`);
    },

    greet2() {
        console.log(`Hi, I'm ${this.name}`);
    }
}


const printName = (person) => {
    console.log(person.name);
}

printName(person);

// destructuring
const printName1 = ({ name }) => {
    console.log(name);
}
printName1(person);


// like python unpacking
const { name, age } = person;
console.log(name, age)


const hobbies = ['Sports', 'Cooking'];

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);