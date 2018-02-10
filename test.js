const expect = require('chai').expect
const request = require('request')

const app = require('./app')

describe('Testing API', () => {
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
