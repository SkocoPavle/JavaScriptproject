const x = "2345.8"
const p = "235px"
const k = "235.5asas"
const c = 25
const y = 6

console.log(Number(x) + y)
console.log(Number(true) + y)
console.log(Number(false) + y)
// Alows us to convert string into a number

console.log(parseInt(p) + y)
// Alows us to convert number inside a string to an acutal number

console.log(parseFloat(k) + y)
// Alows us to convert float number inside a string to an actual number

console.log(String(c) + y)
console.log(c + "")
console.log(c.toString())
// Convers number into a string