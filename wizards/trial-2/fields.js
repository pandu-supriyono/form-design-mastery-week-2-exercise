module.exports = {
  'select-address-country': {
    type: 'radios',
    items: ['nld', 'idn'],
  },
  postcode: {
    type: 'text',
    validate: 'required',
    classes: 'govuk-input--width-5',
  },
  'postcode-idn': {
    type: 'text',
    validate: 'required',
    classes: 'govuk-input--width-20',
  },
  number: {
    type: 'text',
    validate: 'required',
    classes: 'govuk-input--width-5',
  },
  'address-line': {
    type: 'text',
    classes: 'govuk-input--width-20',
    validate: 'required',
  },
  city: {
    type: 'text',
    classes: 'govuk-input--width-20',
    validate: 'required',
  },
  district: {
    type: 'text',
    classes: 'govuk-input--width-20',
    validate: 'required',
  },
  province: {
    type: 'text',
    classes: 'govuk-input--width-20',
    validate: 'required',
  },
};
