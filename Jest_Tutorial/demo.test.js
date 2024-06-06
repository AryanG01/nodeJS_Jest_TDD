const myFunction = require('./demo');

test('Object Assignment Test', () => {
    const data = {'one':1};
    data['two'] = 2;
    expect(data).toEqual({'one': 1, 'two': 2});
});

test('null, nan, 0, False - to be Falsy', () => {
    const n = null;
    expect(n).toBeFalsy();
});

test('to be truthy', () => {
    const n = 1;
    expect(n).toBeTruthy();
});

test('throws on invalid input', () => {
    expect(() => {
        myFunction('1')
    }).toThrow();
});

test('doesnt throws on valid input', () => {
    expect(myFunction(1)).toBe(1);
});