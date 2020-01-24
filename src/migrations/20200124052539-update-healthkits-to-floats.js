'use strict';

const tables = [ 'caffeine', 'flights-climbed', 'heartrate-variability', 'heartrate', 'resting-heartrate', 'sleep-analysis', 'steps', 'swimming-distance', 'walking-heartrate'];

const columns = [ 'value', 'totalSampleValue', 'averageSampleValue', 'highestSampleValue', 'lowestSampleValue'];

module.exports = {
  up: async (queryInterface, Sequelize) => {
    tables.forEach((t) => {
      columns.forEach((c) => {
        queryInterface.changeColumn(t, c, { type: Sequelize.FLOAT } );
      });
    });
  },
  down: (queryInterface, Sequelize) => {
    tables.forEach((t) => {
      columns.forEach((c) => {
        queryInterface.changeColumn(t, c, { type: Sequelize.INTEGER } );
      });
    });
  }
};
