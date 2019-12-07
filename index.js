const express = require('express');
const app = express();
const port = process.env.port || 1234;

const config = require('./config');
const NEW_SERVICE_URL_PATTERN = config.newServiceUrlPattern;

const RegisteredUserService = require('./src/registeredUserService');
const UnregisteredUserService = require('./src/unregisteredUserService');
const ProjectMembershipService = require('./src/projectService');
const NewService = require('./src/newService');

// Initialize the service
const service = NewService(
  RegisteredUserService,
  UnregisteredUserService,
  ProjectMembershipService
);

app.get(NEW_SERVICE_URL_PATTERN, async (req, res) => {
  try {
    const results = await service();
    res.send(results);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.listen(port, () => {
  console.log(`Service listening on port ${port}`);
});
