/**
 * This is the static testData that is used in api_spec.js
 */

let testData = {}

testData.validJson = {
  payload: [
    {
      country: 'UK',
      description: "What's life like when you have enough children to field your own football team?",
      drm: true,
      episodeCount: 3,
      genre: 'Reality',
      image: {
        showImage: 'http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg'
      },
      language: 'English',
      nextEpisode: null,
      primaryColour: '#ff7800',
      seasons: [
        {
          slug: 'show/16kidsandcounting/season/1'
        }
      ],
      slug: 'show/16kidsandcounting',
      title: '16 Kids and Counting',
      tvChannel: 'GEM'
    },
    {
      country: 'USA',
      description: "Simmering with supernatural elements and featuring familiar and fan-favourite characters from the immensely popular drama The Vampire Diaries, it's The Originals. This sexy new series centres on the Original vampire family and the dangerous vampire/werewolf hybrid, Klaus, who returns to the magical melting pot that is the French Quarter of New Orleans, a town he helped build centuries ago.",
      drm: true,
      episodeCount: 1,
      genre: 'Action',
      image: {
        showImage: 'http://mybeautifulcatchupservice.com/img/shows/TheOriginals1280.jpg'
      },
      language: 'English',
      nextEpisode: {
        channel: null,
        channelLogo: 'http://mybeautifulcatchupservice.com/img/player/logo_go.gif',
        date: null,
        html: "<br><span class='visit'>Visit the Official Website</span></span>",
        url: 'http://go.ninemsn.com.au/'
      },
      primaryColour: '#df0000',
      seasons: [
        {
          slug: 'show/theoriginals/season/1'
        }
      ],
      slug: 'show/theoriginals',
      title: 'The Originals',
      tvChannel: 'GO!'
    }
  ],
  skip: 0,
  take: 10,
  totalRecords: 75
}

testData.response = {
  response:
  [{
    image: 'http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg',
    slug: 'show/16kidsandcounting',
    title: '16 Kids and Counting'
  },
  {
    image: 'http://mybeautifulcatchupservice.com/img/shows/TheOriginals1280.jpg',
    slug: 'show/theoriginals',
    title: 'The Originals'
  }]
}

testData.wrongJsonData = {
  someOtherKey: [ // using another key which will cause a server error
    {
      country: 'UK',
      description: "What's life like when you have enough children to field your own football team?",
      drm: true,
      episodeCount: 3,
      genre: 'Reality',
      image: {
        showImage: 'http://mybeautifulcatchupservice.com/img/shows/16KidsandCounting1280.jpg'
      },
      language: 'English',
      nextEpisode: null,
      primaryColour: '#ff7800',
      seasons: [
        {
          slug: 'show/16kidsandcounting/season/1'
        }
      ],
      slug: 'show/16kidsandcounting',
      title: '16 Kids and Counting',
      tvChannel: 'GEM'
    }
  ],
  skip: 0,
  take: 10,
  totalRecords: 75
}

testData.errors = {
  jsonParse: {'error': 'Could not decode request: JSON parsing failed'},
  emptyObject: {'error': 'post request is empty'},
  server: {'error': 'Something went wrong'}
}

module.exports = testData
