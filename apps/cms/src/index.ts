export default {
  /**
   * An asynchronous register function that runs before
   * your application is initialized.
   *
   * This gives you an opportunity to extend code.
   */
  register(/*{ strapi }*/) { },

  /**
   * An asynchronous bootstrap function that runs before
   * your application gets started.
   *
   * This gives you an opportunity to set up your data model,
   * run jobs, or perform some special logic.
   */
  bootstrap(/*{ strapi }*/) {
    const path = require('path');
    const generatedTypesPath = path.resolve('./types/generated');
    const destinationPath = path.resolve('../../shared/types/src/lib')

    const fs = require('fs-extra');
    fs.copySync(generatedTypesPath, destinationPath);
  },
};
