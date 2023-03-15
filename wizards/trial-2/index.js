const wizard = require('hmpo-form-wizard');

module.exports = wizard(require('./steps'), require('./fields'), {
  name: 'trial-2',
  templatePath: 'trial-2',
});
