const multiplyAndLoop = (() => {
    const cachedData = {}

    const fun = (x, y) => {
        if (cachedData[`${x}*${y}`]) {
            return cachedData[`${x}*${y}`]
        }

        let result = x * y
        for (let i = 0; i < 1_000_000_000; i++) {
            result += 1
        }

        cachedData[`${x}*${y}`] = result

        return result
    }

    return fun
})()

console.time("Time to perform the first process")
console.log(multiplyAndLoop(1, 2))
console.timeEnd("Time to perform the first process")

console.time("Time to perform the second process")
console.log(multiplyAndLoop(1, 2))
console.timeEnd("Time to perform the second process")
