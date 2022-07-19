'use strict';

const COLUMN_NAME = 'hkid';

const tables = [
  'active-energy',
  'caffeine',
  'flights-climbed',
  'heartrate-variability',
  'heartrate',
  'oxygen-saturation',
  'resting-heartrate',
  'sleep-analysis',
  'steps',
  'swimming-distance',
  'walking-heartrate-average',
  'walking-running-distance.model',
  'blood-pressure',
];

module.exports = {
  async up(queryInterface) {
    for (let t = 0; t < tables.length; t++) {
      await queryInterface.addColumn(tables[t], COLUMN_NAME, { type: DataTypes.STRING });
    }
  },

  async down(queryInterface) {
    for (let t = 0; t < tables.length; t++) {
      queryInterface.removeColumn(tables[t], COLUMN_NAME);
    }
  },
};
