const MusixmatchApi = require('../../build/javascript-client/src/index');

const defaultClient = MusixmatchApi.ApiClient.instance;
const key = defaultClient.authentications.key;
key.apiKey = "18e2e9aa66c7dc3985df593bf10c44b4"; // {String} 
const opts = {
  format: 'json', // {String} output format: json, jsonp, xml.
};
const trackId = 15445219; // {number}
(new MusixmatchApi.TrackApi()).trackGetGet(trackId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else if (response.text) {
    data = JSON.parse(response.text);
    console.log('Returned data:\n%s', JSON.stringify(data, null, 2));
  } else {
    throw new Error('bad response');
  }
});
