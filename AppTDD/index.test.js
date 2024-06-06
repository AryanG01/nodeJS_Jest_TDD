const {helloWorld, goodnight, greeting} = require('./app');

describe("say hello", () => {
    test("should return Hello World!", () => {
        expect(helloWorld()).toBe('Hello World!');
    });
});

describe("say goodnight", () => {
    test("should return Goodnight, World!", () => {
        expect(goodnight()).toBe('Goodnight, World!');
    });
});

describe("say hello to someone whose name is given", () => {
    test("should return Hello Alice!", () => {
        expect(greeting('Alice')).toBe('Hello Alice!');
    });

    test("should return Hello Bob!", () => {
        expect(greeting('Bob')).toBe('Hello Bob!');
    });

    test("should return error if name isn't a String", () => {
        expect(() => {
            greeting(1)
        }).toThrow();
    });
});