const expect = require('chai').expect;
let newService = require('../src/newService');

describe('New Service', () => {
  let service;

  beforeEach(() => {
    // Generate new service by injecting
    // registeredUserService,
    // unrRegisteredUserService,
    // and projectsService...
    // TODO: Replace with mocks
    service = newService(
      // registeredUserService
      () => [{ id: 1 }],
      // unregisteredUserService
      () => [{ id: 2 }],
      // projectsService
      () => [
        { id: 1, projectId: 5, userId: 2 },
        { id: 2, projectId: 6, userId: 2 }
      ]
    );
  });

  it('should be defined', () => {
    expect(service).to.exist;
  });

  it('should return data as an array', async () => {
    expect(await service()).instanceOf(Array);
  });

  it('should return a populated projectIds array for all projects affiliated with a user', async () => {
    const results = await service();
    expect(results[1].projectIds.length).to.be.eq(2);
  });
  it('should return an empty projectIds array for users with no project affiliations', async () => {
    const results = await service();
    expect(results[0].projectIds.length).to.be.eq(0);
  });

  it('should only have the projectId value in the projectIds array', async () => {
    const results = await service();
    expect(results[1].projectIds[0]).to.be.eq(5);
  });
});
