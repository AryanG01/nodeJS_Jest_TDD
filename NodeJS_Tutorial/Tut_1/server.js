console.log("Hello World")

//console.log(global)

const os = require('os')
const path = require('path')

// console.log(os.type())
// console.log(os.version())
// console.log(os.homedir())

// console.log(__dirname)
// console.log(__filename)

// console.log(path.dirname(__filename))
// console.log(path.basename(__filename))
// console.log(path.extname(__filename))

// console.log(path.parse(__filename))


// to import from a file u need the module.exports in that file and the following code
const math = require('./math')
console.log(math.add(1, 2))

const { add, subtract, multiply, divide } = require('./math')
console.log(subtract(2, 3))
console.log(multiply(2, 3))
console.log(divide(2, 3))