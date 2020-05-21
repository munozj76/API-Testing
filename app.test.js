const supertest = require('supertest')
const app = require('/app')
const request = supertest(app)

describe('the entry point of the application', () => {
    it('receives a GET request at /', done => {
        request
        .get('/')
        .expect(200, 'JSONPlaceholder')
        .end((err,res) =>{
            done()
        })
    })
    it('receives GET request at posts/:1/comments', () => {
        request
        .get('posts/1/comments')
        .expect(200)
        .end((err, res) => {
            done()
        })
    })
    it('receives GET request at albums/:1/photos', () => {
        request
        .get('albums/1/photos')
        .expect(200)
        .end((err, res) => {
            done()
        })
    })

    it('receives GET request at users/:1/albums', () => {
        request
        .get('users/1/albums')
        .expect(200)
        .end((err, res) => {
            done()
        })
    })

    it('receives GET request at users/:1/todos', () => {
        request
        .get('users/1/todos')
        .expect(200)
        .end((err, res) => {
            done()
        })
    })

    it('receives GET request at users/:1/posts', () => {
        request
        .get('users/1/posts')
        .expect(200)
        .end((err, res) => {
            done()
        })
    })

    it('POST request at users/:1/posts', function(done) {
        request
        .post('users/1/posts')
        .send({
            "userId": 1,
            "id": 11,
            "title": "some title in spanish",
            "body": "yo querro taco bell"
          })
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(200)
        .end(function(err, res) {
            if (err) return done(err);
            done();
        });
    });

})
