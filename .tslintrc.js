module.exports = {
  extends: [
    '@ridi/tslint-config',
  ],
  rules: {
    'member-ordering': [true, {
      'order': [
        'constructor',
        'instance-method',
        'instance-field',
        'static-field',
        'static-method',
      ]
    }]
  },
};
