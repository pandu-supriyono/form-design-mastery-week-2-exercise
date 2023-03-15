module.exports = {
  '/': {
    entryPoint: true,
    reset: true,
    skip: true,
    next: 'select-address-country',
  },
  '/select-address-country': {
    fields: ['select-address-country'],
    next: [
      { field: 'select-address-country', value: 'idn', next: 'address-idn' },
      'postcode-lookup',
    ],
  },
  '/postcode-lookup': {
    fields: ['postcode', 'number'],
    next: 'confirm-address',
  },
  '/confirm-address': {},
  '/manual-address': {
    prereqs: ['/select-address-country'],
    fields: ['address-line', 'postcode', 'city'],
  },
  '/address-idn': {
    prereqs: ['/select-address-country'],
    fields: ['address-line', 'postcode-idn', 'district', 'city', 'province'],
  },
};
