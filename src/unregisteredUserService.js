const fetchRemoteData = require('./util/fetchRemoteData');
const UNREGISTERED_USER_URL = require('../config').unregisteredUserUrl;

module.exports = function UnregisteredUserService() {
  return fetchRemoteData(UNREGISTERED_USER_URL);
};
