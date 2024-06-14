const request = require('supertest');
const app = require('./app');

describe("Todos API", () => {
    it('GET /todos ---> array todos', () => {
        return request(app)
            .get('/todos')
            .expect('Content-Type', /json/)
            .expect(200)
            .then(response => {
                expect(response.body).toEqual(
                    expect.arrayContaining([
                        expect.objectContaining({
                            id: expect.any(Number),
                            name: expect.any(String),
                            completed: expect.any(Boolean)
                        }),
                    ])
                );
            });
    });

    it('GET /todos/id ---> specific todo by ID', () => {
        return request(app)
        .get('/todos/1')
        .expect(200)
        .expect('Content-Type', /json/)
        .then(response => {
            expect(response.body).toEqual(
                    expect.objectContaining({
                        name: expect.any(String),
                        completed: expect.any(Boolean)
                    })
                );
        });
    });
    
    it('GET /todos/id ---> 404 if not found', () => {
        return request(app)
        .get('/todos/9999999')
        .expect(404);
    });

    it('POST /todos ---> create a new todo', () => {
        return request(app)
        .post('/todos').send({
            name: 'Do dishes'
        })
        .expect('Content-Type', /json/)
        .expect(201)
        .then(response => {
            expect(response.body).toEqual(
                    expect.objectContaining({
                        id: 2,
                        name: 'Do dishes',
                        completed: false
                    })
                );
        });
    });

    it('POST /todos/id ---> 404 if ID not found', () => {
        return request(app)
        .post('/todos/9999999').send({
            name: 'Do dishes',
            completed: false
        }).expect(404)
    });

    it('POST /todos ---> validate request body', () => {
        return request(app)
        .post('/todos')
        .send({
            name: 123
        })
        .expect(422)
    });
});
