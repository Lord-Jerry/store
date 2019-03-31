/* eslint-disable no-console */
/* eslint-disable no-undef */
const chai = require('chai');
// const { expect, done } = require('chai');
const chaiHttp = require('chai-http');
const server = require('../server');

const url = '/api/v1/register';

chai.use(chaiHttp);
chai.should();

describe('validate registration input', () => {
  it('should check if registration is valid without firstname', (done) => {
    chai.request(server)
      .post(url)
      .send({
        lastname: '',
        username: '',
        email: '',
        gender: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('first name is required');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid without username', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        lastname: '',
        email: '',
        gender: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('username is required');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid without lastname', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        username: '',
        email: '',
        gender: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('last name is required');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid without email', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        username: '',
        lastname: '',
        gender: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('email is required');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid without gender', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        username: '',
        email: '',
        lastname: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('gender is required');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid without password', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        gender: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('password is required');
        done();
      });
  });
});


describe('validate registration input', () => {
  it('should check if registration is valid if firstname is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: '',
        lastname: '',
        username: '',
        email: '',
        gender: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('first name cannot be empty');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid if lastname is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jay',
        lastname: '',
        username: '',
        email: '',
        gender: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('last name cannot be empty');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid if username is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jay',
        lastname: 'jay',
        username: '',
        email: '',
        gender: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('username cannot be empty');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid if email is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jay',
        lastname: 'jay',
        username: 'jay',
        email: '',
        gender: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('email cannot be empty');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid if gender is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jay',
        lastname: 'jay',
        username: 'jay',
        email: 'jay',
        gender: '',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('gender cannot be empty');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid if password is empty', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jay',
        lastname: 'jay',
        username: 'jay',
        email: 'jay',
        gender: 'jay',
        password: '',
        password2: '',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('password cannot be empty');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid if firstname length is lesser than 3', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'ja',
        lastname: 'fsnfb',
        username: 'snbf',
        email: 'fsf',
        gender: 'nfsnn',
        password: 'snfs',
        password2: 'snn',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.equal('minimum value for first name is 3');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid if lastname length is lesser than 3', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jay',
        lastname: 'ja',
        username: 'dggg',
        email: 'ghhjgj',
        gender: 'hgj',
        password: 'fhsd',
        password2: 'hshhhs',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.a('string');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid if username length is lesser than 3', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jay',
        lastname: 'jay',
        username: 'dg',
        email: 'ghhjgj',
        gender: 'hgj',
        password: 'fhsd',
        password2: 'hshhhs',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.a('string');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid if email length is lesser than 3', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jay',
        lastname: 'jay',
        username: 'dggg',
        email: 'gh',
        gender: 'hgj',
        password: 'fhsd',
        password2: 'hshhhs',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.a('string');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid if gender length is lesser than 4', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jay',
        lastname: 'jay',
        username: 'dggg',
        email: 'ghhjgj',
        gender: 'hgt',
        password: 'fhsd',
        password2: 'hshhhs',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.a('string');
        done();
      });
  });
});

describe('validate registration input', () => {
  it('should check if registration is valid if password length is lesser than 3', (done) => {
    chai.request(server)
      .post(url)
      .send({
        firstname: 'jay',
        lastname: 'jay',
        username: 'dggg',
        email: 'ghhjgj',
        gender: 'hgjd',
        password: 'fh',
        password2: 'hshhhs',
      })
      .end((err, res) => {
        console.log(res.body);
        res.should.have.status(400);
        res.body.message.should.be.a('string');
        done();
      });
  });
});

