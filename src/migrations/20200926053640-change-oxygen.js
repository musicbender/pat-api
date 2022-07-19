'use strict';

const table = 'oxygen-saturation';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.addColumn(table, 'valueType', {
        type: Sequelize.STRING,
      }),
      await queryInterface.addColumn(table, 'totalSampleValue', {
        type: Sequelize.FLOAT,
      }),
      await queryInterface.addColumn(table, 'averageSampleValue', {
        type: Sequelize.FLOAT,
      }),
      await queryInterface.addColumn(table, 'highestSampleValue', {
        type: Sequelize.FLOAT,
      }),
      await queryInterface.addColumn(table, 'lowestSampleValue', {
        type: Sequelize.FLOAT,
      }),
      await queryInterface.addColumn(table, 'sources', {
        type: Sequelize.ARRAY(Sequelize.STRING),
      }),
      await queryInterface.addColumn(table, 'totalDuration', {
        type: Sequelize.STRING,
      }),
    ];
  },
  down: async (queryInterface) => {
    return [
      await queryInterface.removeColumn(table, 'valueType'),
      await queryInterface.removeColumn(table, 'totalSampleValue'),
      await queryInterface.removeColumn(table, 'averageSampleValue'),
      await queryInterface.removeColumn(table, 'highestSampleValue'),
      await queryInterface.removeColumn(table, 'lowestSampleValue'),
      await queryInterface.removeColumn(table, 'sources'),
      await queryInterface.removeColumn(table, 'totalDuration'),
    ];
  },
};
