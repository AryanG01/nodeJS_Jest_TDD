const {helloWorld, goodnight, greeting} = require('./app');

const args = process.argv.slice(2);

if (args.length === 0) {
    console.log(helloWorld());
} else if (args[0] === "goodnight") {
    console.log(goodnight());
} else {
    console.log(greeting(args[0]));
}