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
  describe('GET /api/tasks/:id', () => {
    it('It should GET a single task by ID', (done) => {
      const taskId = 1;
      chai
        .request(server)
        .get('/api/tasks/' + taskId)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('id');
          response.body.should.have.property('name');
          response.body.should.have.property('completed');
          response.body.should.have.property('id').eq(1);
          done();
        });
    });
  });
  describe('GET /api/tasks/:id', () => {
    it('It should NOT GET a single task by ID', (done) => {
      const taskId = 14;
      chai
        .request(server)
        .get('/api/tasks/' + taskId)
        .end((err, response) => {
          response.should.have.status(404);
          response.text.should.be.eq(
            'The task with the provided ID does not exist'
          );
          done();
        });
    });
  });
  //Test POST Route
  describe('POST /api/tasks', () => {
    it('It should POST a new single task', (done) => {
      const task = {
        name: 'Task 4',
        completed: false,
      };
      chai
        .request(server)
        .post('/api/tasks')
        .send(task)
        .end((err, response) => {
          response.should.have.status(200);
          response.body.should.be.a('object');
          response.body.should.have.property('id').eq(4);
          response.body.should.have.property('name').eq('Task 4');
          response.body.should.have.property('completed').eq(false);
          done();
        });
    });
  });
  describe('POST /api/tasks', () => {
    it('It should NOT POST a new single task without the name property', (done) => {
      const task = {
        completed: false,
      };
      chai
        .request(server)
        .post('/api/tasks')
        .send(task)
        .end((err, response) => {
          response.should.have.status(400);
          response.text.should.be.eq(
            'The name should be at least 3 characters long'
          );
          done();
        });
    });
  });
  //Test PUT Route
  //Test PATCH Route
  //Test DELETE Route
});
