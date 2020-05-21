const supertest = require('supertest')
const app = require('/app')
const request = supertest(app)

describe('the entry point of the application', () => {
    it('receives a GET request at /', done => {
        request
        .get('/')
        .expect(200, 'Welcome')
        .end(done)
    })
})