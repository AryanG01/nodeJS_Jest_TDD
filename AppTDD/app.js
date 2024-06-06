function helloWorld() {
    return 'Hello World!';
}

function goodnight() {
    return 'Goodnight, World!';
}

function greeting(name) {
    if (typeof name !== 'string') {
        throw new Error('Invalid input, name should be of type String!');
    }
    return `Hello ${name}!`;
}

module.exports = {helloWorld, goodnight, greeting};