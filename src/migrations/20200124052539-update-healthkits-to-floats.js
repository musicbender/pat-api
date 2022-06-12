const tables = [ 'caffeine', 'flights-climbed', 'heartrate-variability', 'heartrate', 'resting-heartrate', 'sleep-analysis', 'steps', 'swimming-distance', 'walking-heartrate-average'];

const columns = [ 'value', 'totalSampleValue', 'averageSampleValue', 'highestSampleValue', 'lowestSampleValue'];

export default {
  up: async (queryInterface, Sequelize) => {
    for (let t = 0; t < tables.length; t++) {
      for (let c = 0; c < columns.length; c++) {
        await queryInterface.changeColumn(tables[t], columns[c], { type: Sequelize.FLOAT } )
      }
    }
  },
  down: async (queryInterface, Sequelize) => {
    for (let t = 0; t < tables.length; t++) {
      for (let c = 0; c < columns.length; c++) {
        await queryInterface.changeColumn(tables[t], columns[c], { type: Sequelize.INTEGER } )
      }
    }
  }
};
