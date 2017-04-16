'use strict'

const frisby = require('frisby')
const testData = require('./test-data')

let url = 'https://nine-digital-json-handler.herokuapp.com/'

frisby.create('Ensure the get request sends an ok response')
  .get(url)
  .expectStatus(200)
  .toss()

frisby.create('Ensure Json is properly filtered and sent back')
  .post(url,
  testData.validJson,
  { json: true },
  { headers: { 'Content-Type': 'application/json' } })
  .expectStatus(200)
  .expectJSON(testData.response)
  .toss()

frisby.create('Ensure invalid Json is caught')
  .post(url,
  testData.validJson,
  { headers: { 'Content-Type': 'application/json' } })
  .expectStatus(400)
  .expectJSON(testData.errors.jsonParse)
  .toss()

frisby.create('Ensure empty object is caught')
  .post(url,
  {},
  { json: true },
  { headers: { 'Content-Type': 'application/json' } })
  .expectStatus(200)
  .expectJSON(testData.errors.emptyObject)
  .toss()

frisby.create('Ensure server error is caught')
  .post(url,
  testData.wrongJsonData,
  { json: true },
  { headers: { 'Content-Type': 'application/json' } })
  .expectStatus(500)
  .expectJSON(testData.errors.server)
  .toss()
