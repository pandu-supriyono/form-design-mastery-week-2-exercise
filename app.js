const { setup } = require('@kbridenhaag/kbridh-app');
const { options } = require('./config');
const { router } = setup({
  config: {
    seed: options,
  },
});

router.use(require('./lib/locals'));

router.use('/trial-1', require('./wizards/trial-1'));

router.use('/trial-2', require('./wizards/trial-2'));

router.use('/', (req, res) => res.render('index.html'));
