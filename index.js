const math = require('./math')
const greet = require('./greetings')
const hello = require('./greetings/hello')

console.log(math.divide(1, 0))
console.log(math.divide(0, 5))
console.log(math.add(1, 9))
console.log(greet.greet('Tegui'))
console.log(hello.sayHello('Tegui'))