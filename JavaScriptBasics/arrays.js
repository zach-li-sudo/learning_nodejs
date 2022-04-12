const hobbies = ['Sports', 'Cooking', 34, true];

for (let hobby of hobbies) {
    console.log(hobby);
}


// map() function for iterables, create new array
console.log(hobbies.map(hobby => {
    return 'Hobby: ' + hobby;
}));



/* reference type */
hobbies.push('New'); // edit hobbies array
console.log(hobbies);


const copiedArray = hobbies.slice();
console.log(copiedArray);

const copy1 = [hobbies]; // nested array
console.log(copy1);

// spread operator
const copy2 = [...hobbies]; // a copy
console.log(copy2);

// rest operator
const toArray = (...args) => {
    return args;
}

console.log(toArray(1,2,3,4));

