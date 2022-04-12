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


console.log(person)
person.greetNotWork()
person.greet1()
person.greet2()