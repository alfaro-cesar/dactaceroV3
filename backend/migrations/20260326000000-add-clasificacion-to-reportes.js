'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.addColumn('reportes', 'clasificacion', {
      type: Sequelize.ENUM('Tipo I', 'Tipo II', 'Tipo III'),
      allowNull: true,
      defaultValue: null
    });
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.removeColumn('reportes', 'clasificacion');
  }
};
