// tests/app.test.js
const request = require('supertest');
const app = require('../app');

describe('GET /', () => {
  it('should return Hello, World!', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, World!');
  });
});

describe('GET /hello', () => {
  it('should return Hello, User!', async () => {
    const response = await request(app).get('/hello');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, User!');
  });
});

describe('GET /goodbye', () => {
  it('should return Goodbye, User!', async () => {
    const response = await request(app).get('/goodbye');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Goodbye, User!');
  });
});

describe('GET /hello/:name', () => {
  it('should return Hello, Alice! when name is Alice', async () => {
    const response = await request(app).get('/hello/Alice');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, Alice!');
  });

  it('should return Hello, Bob! when name is Bob', async () => {
    const response = await request(app).get('/hello/Bob');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('Hello, Bob!');
  });
});
