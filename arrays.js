const arr = [1, 2 ,3, true]
const arr2 = new Array(5)
console.log(arr2)
console.log(arr2[2])

const arr3 = Array.from("Hello")
console.log(arr3)
console.log(arr3[3])

arr3[0] = "y"
console.log(arr3[0])
console.log(arr3[arr3.length - 1])

arr3.push(4)
console.log(arr3)
arr3.pop()
console.log(arr3)
arr3[arr3.length + 5] = "test"
console.log(arr3)

arr3.shift()
console.log(arr3)
arr3.unshift("new")
console.log(arr3)
console.log(arr3.indexOf("o"))
console.log(arr3.lastIndexOf("l"))
console.log(arr3.includes("l"))

const arr4 = arr.concat(arr2)
console.log(arr4)
const str = arr.join("|")
console.log(str)

const arr5 = arr.slice(1, 3)
console.log(arr5)
const arr6 = arr.splice(1, 1)
console.log(arr6)
console.log(arr)
const arr7 = arr.splice(1, 2)
console.log(arr7)
console.log(arr)