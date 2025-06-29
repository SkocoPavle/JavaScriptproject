const myMap = new Map()
const numberMap = new Map ([[1, 'one'], [2, 'two']])

myMap.set(4, "four")
myMap.set(1, "one")
myMap.delete(1)
myMap.get(1)
myMap.has(1)

for (const [key, values] of myMap) {
    console.log(key,values)
}

for (const key of myMap.keys()) {
    console.log(key)
}

for (const values of myMap.values()) {
    console.log(values)
}

const arr = Array.from(myMap)
console.log(arr)
myMap.clear()