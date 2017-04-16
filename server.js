const express = require('express')
const shows = require('./routes/shows')
const bodyParser = require('body-parser')

const app = express()
const port = 3000

app
  .use(bodyParser.json()) // accept and parse json data
  .use(shows)
  .use((err, req, res, next) => { // error handling
    res.status(err.status || 500)
    if (err.status === 400) {
      res.send({'error': 'Could not decode request: JSON parsing failed'})
    } else {
      res.send({'error': 'Something went wrong'})
    }
  })

app.listen(port)
