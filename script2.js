const [x, ...y] = [1, 2, 3, 4]
console.log(x, y)

const p = [1, 2, 3, 4]
const k = p
k.push("hello")
console.log(p, k)

const c = [...p]
c.push("hello")
console.log(p, c)
