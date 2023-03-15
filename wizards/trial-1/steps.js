module.exports = {
  '/': {
    entryPoint: true,
    resetJourney: true,
    skip: true,
    next: 'postcode-lookup',
  },
  '/postcode-lookup': {
    fields: ['postcode', 'number'],
    next: 'confirm-address',
  },
  '/confirm-address': {},
  '/manual-address': {
    prereqs: ['/trial-1'],
    fields: ['address-line', 'postcode', 'city'],
  },
  '/address-idn': {
    prereqs: ['/trial-1'],
    fields: ['address-line', 'postcode-idn', 'district', 'city', 'province'],
  },
};
