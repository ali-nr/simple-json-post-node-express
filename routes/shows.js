const express = require('express')
const router = express.Router()

router
  .get('/', (req, res) => { // Just inform the user that they should post a valid json
    res.send('<h3>Please start by posting valid json data to get filtered response back</h3>')
  })
  .post('/', (req, res) => { // Grab the incoming postd json and process it
    // grab all the shows
    let allShows = req.body.payload
    // filter the shows to the ones with drm = true & episodeCount > 0
    let filteredShows = allShows.filter(show => {
      return show.drm && show.episodeCount > 0
    })
    // create a new json object to then populate and send back to the client side
    let newshowsJson = {
      response: [] // response key
    }
    for (let show of filteredShows) {
      newshowsJson.response.push({
        image: show.image.showImage,
        slug: show.slug,
        title: show.title
      })
    }
    res.send(newshowsJson)
  })
module.exports = router
