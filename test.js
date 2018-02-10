const expect = require('chai').expect
const request = require('request')

const app = require('./app')

describe('Testing basic API', () => {
  it('Testing root', (done) => {
    request('http://localhost:3000/', (err, res, body) => {
      expect(body).to.equal('{"message":"Hello world"}')
      done()
    })
  })

  it('Testing hi', (done) => {
    request('http://localhost:3000/hi/George', (err, res, body) => {
      expect(body).to.equal('{"message":"Hello George!"}')
      done()
    })
  })

  it('Testing bye', (done) => {
    request('http://localhost:3000/bye/George', (err, res, body) => {
      expect(body).to.equal('{"message":"Bye George! Have a great day"}')
      done()
    })
  })
})

describe('Testing math API', () => {
  it('Testing 5 + 3', (done) => {
    request('http://localhost:3000/math/5/3', (err, res, body) => {
      expect(body).to.equal('{"result":8}')
      done()
    })
  })

  it('Testing -5 + -3', (done) => {
    request('http://localhost:3000/math/-5/-3', (err, res, body) => {
      expect(body).to.equal('{"result":-8}')
      done()
    })
  })

  it('Testing 3.23 + -1', (done) => {
    request('http://localhost:3000/math/3.23/-1', (err, res, body) => {
      expect(body).to.equal('{"result":2.23}')
      done()
    })
  })

  it('Testing 3 + 5 (THIS SHOULD FAIL)', (done) => {
    request('http://localhost:3000/math/3/5', (err, res, body) => {
      expect(body).to.equal('{"result":9}')
      done()
    })
  })
})
