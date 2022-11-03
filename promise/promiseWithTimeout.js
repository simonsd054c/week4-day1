
const ourPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        console.log("Log this first")
        resolve()
    }, 3000)
})

// ourPromise.then(() => {
//     console.log("Log this second")
// }).catch(() => {
//     console.log("Error")
// })

const successFn = () => {
    console.log("Log this second")
}

const failureFn = () => {
    console.log("Error")
}

ourPromise.then(successFn, failureFn)