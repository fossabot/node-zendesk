//Organizations.js: Client for the zendesk API.


var util = require('util'),
  Client = require('./client').Client;

var Organizations = exports.Organizations = function (options) {
  this.jsonAPINames = ['organizations', 'organization'];
  Client.call(this, options);
};

// Inherit from Client base object
util.inherits(Organizations, Client);

// ######################################################## Organizations

// ====================================== Listing Organizations
Organizations.prototype.list = function (cb) {
  return this.requestAll('GET', ['organizations', '?page[size]=100'], cb);//all
};

// ====================================== Viewing Organizations
Organizations.prototype.show = function (organizationID, cb) {
  return this.request('GET', ['organizations', organizationID], cb);
};

// ====================================== Creating Organizations
Organizations.prototype.create = function (organization, cb) {
  return this.request('POST', ['organizations'], organization, cb);
};

// ====================================== Creating Many Organizations
Organizations.prototype.createMany = function (organizations, cb) {
  return this.request('POST', ['organizations', 'create_many'], organizations, cb);
};

// ====================================== Creating Or Updating Organizations
Organizations.prototype.createOrUpdate = function (organization, cb) {
  return this.request('POST', ['organizations', 'create_or_update'], organization, cb);
};

// ====================================== Updating Organizations
Organizations.prototype.update = function (organizationID, organization, cb) {
  return this.request('PUT', ['organizations', organizationID], organization, cb);
};

// ====================================== Updating Many Organizations
Organizations.prototype.updateMany = function (organizations, cb) {
  return this.request('PUT', ['organizations', 'update_many'], organizations, cb);
};

// ====================================== Creating Or Updating Organizations
Organizations.prototype.upsert = function (organization, cb) {
  return this.request('POST', ['organizations', 'create_or_update'], organization, cb);
};

// ====================================== Deleting Organizations
Organizations.prototype.delete = function (organizationID, cb) {
  return this.request('DELETE', ['organizations', organizationID], cb);
};

// ====================================== Search Organizations
Organizations.prototype.search = function (params, cb) {
  return this.requestAll('GET', ['organizations', 'search', params], cb);
};

// ====================================== Autocomplete Organizations
Organizations.prototype.autocomplete = function (params, cb) {
  return this.requestAll('GET', ['organizations', 'autocomplete', params], cb);
};

// ====================================== New Incremental Organization Export with include
Organizations.prototype.incrementalInclude = function (startTime, include, cb) {
  return this.requestAll('GET', ['incremental', 'organizations', { start_time: startTime, include: include }], cb);
};

// ====================================== New Incremental Organization Export
Organizations.prototype.incremental = function (startTime, cb) {
  return this.requestAll('GET', ['incremental', 'organizations', { start_time: startTime }], cb);
};

// ====================================== New Incremental Organization Export Sample
Organizations.prototype.incrementalSample = function (startTime, cb) {
  return this.request('GET', ['incremental', 'organizations', 'sample', { start_time: startTime }], cb);
};

