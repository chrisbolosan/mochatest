let chai = require('chai');
let chaiHttp = require('chai-http');
let server = require('../index');

//Assertion style
chai.should();

chai.use(chaiHttp);

describe('Tasks API', () => {
  //Test GET Route
  describe('GET /api/tasks', () => {
    it('It should GET all the tasks', (done) => {
      chai
        .request(server)
        .get('/api/tasks')
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('array');
          response.body.should.have.lengthOf(3);
          done();
        });
    });
  });
  describe('GET /api/tasks', () => {
    it('It should NOT GET all the tasks', (done) => {
      chai
        .request(server)
        .get('/api/task')
        .end((err, response) => {
          response.should.have.status(404);
          done();
        });
    });
  });
  //Test GET Route by ID
  //Test POST Route
  //Test PUT Route
  //Test PATCH Route
  //Test DELETE Route
});
