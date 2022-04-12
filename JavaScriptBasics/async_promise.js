const fetchData = (callback) => {
    setTimeout(
        () => {
            callback('Done!');
        }
        , 1500);
}



// async code
setTimeout(
    () => {
        console.log('Timer is done!')
    },
    1
); // callback function



// sync code
console.log('Hello!');
console.log("Hi!")
