function f1(callback) {
    setTimeout(() => {
        console.log("f1");
        if (callback) callback()
    }, rand());
}

function f2(callback) {
    setTimeout(() => {
        console.log("f2");
        if (callback) callback()
    }, rand());
}
function f3(callback) {
    setTimeout(() => {
        console.log("f3");
        if (callback) callback()
    }, rand());
}

function f4(callback) {
    setTimeout(() => {
        console.log("f4");
        if (callback) callback()
    }, rand());
}

function rand(min = 1000, max = 3000) {
    const num = Math.random() * (max - min) + min;
    return Math.floor(num);
}


//Callback Hell
// f1(function () {
//     f2(function () {
//         f3(function(){
//             f4(function () {
//                 console.log("Olá Mundo");
//             })
//         })
//     })
// });


// setTimeout() -> determina um tempo regressivo para execução


// Funções com callback
f1(f1Callback);

function f1Callback() {
    f2(f2Callback);
}

function f2Callback() {
    f3(f3Callback);
}

function f3Callback() {
    f4(f4Callback);
}

function f4Callback() {
    console.log('Olá mundo!')
}
