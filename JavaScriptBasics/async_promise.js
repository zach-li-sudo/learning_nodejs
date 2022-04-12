const fetchData = (callback) => {
    const promise = new Promise((resolve, reject) => {
        
    });
    setTimeout(
        () => {
            callback('Done!');
        }
        , 1500);
}



const fetchData1 = () => {
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Done!');
        }, 1500); 
    });
    return promise;
}


// async code
setTimeout(
    () => {
        console.log('Timer is done!');
        fetchData(text => {
            console.log(text);
        })
    },
    2000
); // callback function


setTimeout(() => {
    console.log('Timer is done!');
    fetchData1().then(
        text => {
            console.log(text);
            return fetchData1();
        }
    ).then(text2 => {
        console.log(text2);
    })
})


// sync code
console.log('Hello!');
console.log("Hi!")
