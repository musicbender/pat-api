'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.addColumn(
        'steps',
        'valueType',
        {
          type: Sequelize.STRING,
        }
      ),
      await queryInterface.renameColumn('steps', 'average', 'averageSampleValue'),
      await queryInterface.renameColumn('steps', 'total', 'totalSampleValue')
    ]
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('steps', 'valueType'),
    await queryInterface.renameColumn('steps', 'averageSampleValue', 'average'),
    await queryInterface.renameColumn('steps', 'totalSampleValue', 'total')
  }
};
