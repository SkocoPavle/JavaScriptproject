const myPromise = new Promise ((resolve, reject) => {
    if (true) {
        resolve("good")
    }
    else {
        reject("bad") 
    }
})

myPromise.then((value) => {
    console.log(value);
}).catch((value) => {
    console.log(value)
}).finally((value) => {
    console.log("always")
})

const promise1 = Promise.resolve(3)
const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 500, "foo"))
const promise3 = new Promise((resolve, reject) => setTimeout(reject, 100, "bar"))

Promise.all([promise1, promise2, promise3])
    .then((result) => {
        console.log(result)
    })
    .catch((error) => {
        console.log(error)
    })