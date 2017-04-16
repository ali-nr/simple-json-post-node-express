# Small JSON-based web service

## Description

It's pretty simple. We'll post some JSON data to the URL you provide. You'll need to filter that JSON data and return a few fields. Here's an [example request](http://codingchallenge.nine.com.au/sample_request.json)
and an [example response](http://codingchallenge.nine.com.au/sample_response.json).

### Details

From the list of shows in the request payload, return the ones with DRM enabled (drm: true) and at least one episode (episodeCount > 0).

The returned JSON should have a response key with an array of shows. Each element should have the following fields from the request:

* image - corresponding to image/showImage from the request payload
* slug
* title

### Error Handling

If we send invalid JSON, You'll need to return a JSON response with HTTP status 400 Bad Request, and with a `error` key containing the string Could not decode request. For example:

`{"error": "Could not decode request: JSON parsing failed"}`

## Configurations

In order to run the app 
* Please install NodeJs
* Please install npm
* Make sure you have added npm to your path:

``` npm bin -g ```

``` export PATH=$PATH:/path to your 'npm-packages/bin' ```

* Please install dependencies
* You should then be able to run ```npm start``` to run the app

In order to run the tests:
* Please install jasmine-node: `npm install -g jasmine-node`
* Please install frisby test library as a dev dependency: `npm install --save-dev frisby`
* You should then be able to run `npm test` to run the tests


** It is important to note that I have used the Javascript Standard Style to write the application
<https://standardjs.com/>