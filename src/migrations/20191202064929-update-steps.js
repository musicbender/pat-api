module.exports = {
  up: async (queryInterface, Sequelize) => {
   return [
    await queryInterface.addColumn(
      'steps',
      'total',
      {
        type: Sequelize.INTEGER,
      }
    ),
    await queryInterface.addColumn(
      'steps',
      'average',
      {
        type: Sequelize.INTEGER,
      }
    ),
    await queryInterface.addColumn(
      'steps',
      'highestSampleValue',
      {
        type: Sequelize.INTEGER,
      }
    ),
    await queryInterface.addColumn(
      'steps',
      'lowestSampleValue',
      {
        type: Sequelize.INTEGER,
      }
    ),
   ]
  },
  down: async (queryInterface, Sequelize) => {
    return [
      await queryInterface.removeColumn('steps', 'total'),
      await queryInterface.removeColumn('steps', 'average'),
      await queryInterface.removeColumn('steps', 'highestSampleValue'),
      await queryInterface.removeColumn('steps', 'lowestSampleValue'),
    ];
  }
};
