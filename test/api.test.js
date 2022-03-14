const request = require('supertest');

const app = require('../src/app');

describe('GET /api/v1', () => {
  it('responds with a json message', (done) => {
    request(app)
      .get('/api/v1')
      .set('Accept', 'application/json')
      .expect('Content-Type', /json/)
      .expect(200, {
        message: '👋 Hello! This endpoint can only be used with POST.'
      }, done);
  });
});

describe('POST /api/v1', () => {
  it('API receives correct payload, responses with 200 and correct format of JSON', (done) => {
    request(app)
      .post('/api/v1')
      .send({
        "startDate": "2016-12-27",
        "endDate": "2016-12-27",
        "minCount": 3,
        "maxCount": 3
      })
      .expect('Content-Type', /json/)
      .expect(200, {
        "code": 0,
        "msg": "Success",
        "records": []
    })
      .end((err, res) => {
        if (err) return done(err);
        return done();
      });
  }).timeout(3000);;
});