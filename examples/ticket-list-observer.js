var exampleConfig = require('./exampleConfig');
var zd = require('../lib/client');

var client = zd.createClient({
  username:  process.env.ZENDESK_TEST_USERNAME || exampleConfig.auth.username,
  token:     process.env.ZENDESK_TEST_TOKEN || exampleConfig.auth.token,
  remoteUri: process.env.ZENDESK_TEST_REMOTEURI || exampleConfig.auth.remoteUri
});

var observer = {
  error: console.error,
  next: function(status, body, response, result, nextPage) {
    console.log(JSON.stringify(body, null, 2, true));
    console.log('Next page:', nextPage);
  },
  complete: function(statusList, body, responseList, resultList) {
    console.log('Pagination complete.');
    console.log(body); //will display all tickets
  }
};

client.tickets.list(observer);
