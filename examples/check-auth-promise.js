var exampleConfig = require('./exampleConfig');
var zd = require('../lib/client');

var client = zd.createClient({
    username:  process.env.ZENDESK_TEST_USERNAME || exampleConfig.auth.username,
    token:     process.env.ZENDESK_TEST_TOKEN || exampleConfig.auth.token,
    remoteUri: process.env.ZENDESK_TEST_REMOTEURI || exampleConfig.auth.remoteUri
});

client.users.auth()
  .then(function(response) {
    var result = response;
    console.dir(result.verified)
  })
  .catch(function(error) {
    console.log(error);
  });
