const firstPromise = new Promise((resolve, reject) => {
    resolve("Hello! This promise hase been resolved")
    // reject("Hello! This promise has been rejected")
})

firstPromise.then((result) => {
    console.log(result)
}).catch((error) => {
    console.log(error)
}).finally(() => {
    console.log("Finally")
})