// function that takes a single argument (num) which is a number and returns a promise
// if num is not a number, reject immediately with "Error"
// if num is odd, resolve with "odd" after 3 sec
// if num is even, reject with "even" after 1 sec

// function makePromise(num) {
//     return new Promise((resolve, reject) => {
//         if (typeof num !== "number") {
//             reject("Error")
//         } else {
//             if (num % 2 == 0) {
//                 setTimeout(() => {
//                     reject("Even")
//                 }, 1000)
//             } else {
//                 setTimeout(() => {
//                     resolve("Odd")
//                 }, 3000)
//             }
//         }
//     })
// }

// makePromise("6").then((res)=> {
//     console.log(res)
// }).catch((err) => {
//     console.log(err)
// })

function oddOrEven(num) {
    let promise = new Promise((resolve, reject) => {
        if (typeof num !== "number") {
            reject("Error")
        } else {
            if (num % 2 !== 0) {
                // num is odd
                setTimeout(() => {
                    resolve("Odd")
                }, 3000)
            } else {
                // num is even
                setTimeout(() => {
                    reject("Even")
                }, 1000)
            }
        }
    })

    return promise
}

oddOrEven("6")
    .then((res) => {
        console.log("Result: ", res)
    })
    .catch((err) => {
        console.log("Error: ", err)
    })
