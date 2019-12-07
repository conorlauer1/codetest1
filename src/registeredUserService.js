const fetchRemoteData = require('./util/fetchRemoteData');
const REGISTERED_USER_URL = require('../config').registeredUserUrl;

module.exports = function RegisteredUserService() {
  return fetchRemoteData(REGISTERED_USER_URL);
};
