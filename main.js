function promiseF1() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Promise F1");
            resolve();
        }, 2500);
    });
}

function promiseF2() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Promise F2");
            resolve();
        }, 1000);
    });
}

function promiseF3() {
    return new Promise(function (resolve, reject) {
        setTimeout(() => {
            console.log("Promise F3");
            resolve();
        }, 2500);
    });
}

// promiseF1()
//     .then(() => promiseF2())
//     .then(() => promiseF3());
 

async function asyncFunc() {
    await promiseF1();
    await promiseF2();
    await promiseF3();
}

asyncFunc();
