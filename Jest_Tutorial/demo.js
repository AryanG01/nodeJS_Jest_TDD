function myFunction(input) {
    if (typeof input !== 'number') {
        throw new Error('Invalid Input, input is not a number.');
    }
    return input;
}

module.exports = myFunction;