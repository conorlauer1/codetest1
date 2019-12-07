const https = require('https');

module.exports = function fetchRemoteData(url) {
  return new Promise((resolve, reject) => {
    https
      .get(url, res => {
        let results = '';
        res.on('data', data => {
          results += data;
        });
        res.on('end', () => {
          // Convert string data into JSON
          // if it fails, reject
          try {
            resolve(JSON.parse(results));
          } catch (e) {
            reject(e);
          }
        });
      })
      .on('error', error => {
        reject(error);
      });
  });
};
