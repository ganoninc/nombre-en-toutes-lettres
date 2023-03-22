'use strict';

const NombresEnToutesLettres = require('../src/index');

test('Get "Hello worlds!"', () => {
  expect(NombresEnToutesLettres()).toBe("Hello world!");
});
