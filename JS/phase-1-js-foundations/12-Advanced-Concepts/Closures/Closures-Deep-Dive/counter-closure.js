function createCounter () {
    let count = 0;

    return function () {
        count ++;
        console.log(`counter: ${count}`);
    };
}

const counter1 = createCounter();
counter1();
counter1();

const counter2 = createCounter();
counter2();