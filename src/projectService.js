const fetchRemoteData = require('./util/fetchRemoteData');
const PROJECT_MEMBERSHIP_URL = require('../config').projectsUrl;

module.exports = function ProjectService() {
  return fetchRemoteData(PROJECT_MEMBERSHIP_URL);
};
