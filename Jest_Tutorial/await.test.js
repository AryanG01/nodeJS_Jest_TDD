const fetchPromise = require('./promise');

test('the data is peanut butter', async () => {
    const data = await fetchPromise(0);
    expect(data).toBe('peanut butter');
})

test('the fetch fails with an error', async () => {
    try {
        await fetchPromise(1);
    } catch (error) {
        expect(error.message).toBe('error');
    }
})