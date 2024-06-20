const fetchPromise = require('./promise');

test('the data is peanut butter', () => {
    return expect(fetchPromise(0)).resolves.toBe('peanut butter');
})

test('the fetch fails with an error', () => {
    return expect(fetchPromise(1)).rejects.toThrow('error');
});