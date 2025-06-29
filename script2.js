const arr = [1, 2, 3]

for (let i = 0; i < arr.length; i++) {
    console.log(arr[i])
}

const arr2 = [4, 5, 6]

for (let value of arr2) {
    console.log(value)
}

const arr3 = [1, 2, 3, 4]

for (let [i, value] of arr3.entries()) {
    console.log(i, value)
}