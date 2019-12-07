/**
 * NewService needs to get its data from an external
 * source. So we will pass in some helper functions
 * that will give the represented data to this routine.
 *
 * This routine returns a callable function that has
 * encapsulated the three services passed in.
 *
 * Usage:
 * const service = NewService(injected1,injected2,injected3);
 * try{
 * const results = await service();
 * }catch(e){ }
 * // or
 * service().then(results=>{}).catch(error=>{});
 */
module.exports = function NewService(
  registeredUserService,
  unregisteredUserService,
  projectService
) {
  return async () => {
    const regUsers = await registeredUserService();
    const unRegUsers = await unregisteredUserService();
    const projects = await projectService();

    const allUsers = [...regUsers, ...unRegUsers];

    const results = [];

    for (let user of allUsers) {
      user.projectIds = projects.filter(p => p.userId === user.id);
      results.push(user);
    }

    return results;
  };
};
