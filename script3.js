const myset = new Set()
myset.add(1)
myset.delete(1)
myset.has(1)
myset.size

for (const value of myset) {
    console.log()
}

myset.clear()
const arr = Array.from(myset)
const aee2 = [... new Set([1, 2, 3])]