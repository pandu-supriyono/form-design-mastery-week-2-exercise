const wizard = require('hmpo-form-wizard');

module.exports = wizard(require('./steps'), require('./fields'), {
  name: 'trial-1',
  templatePath: 'trial-1',
});
