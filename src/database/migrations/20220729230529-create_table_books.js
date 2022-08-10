'use strict'

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.createTable('books', {
      id: {
        type: Sequelize.DataTypes.INTEGER(10),
        primaryKey: true,
        autoIncrement: true,
        allowNull: false
      },
      title: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      number_pages: {
        type: Sequelize.DataTypes.INTEGER(10),
        allowNull: false
      },
      author: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      },
      release_year: {
        type: Sequelize.DataTypes.STRING(10),
        allowNull: false
      },
      inventory: {
        type: Sequelize.DataTypes.INTEGER(10),
        allowNull: false
      },
      launch_country: {
        type: Sequelize.DataTypes.STRING(200),
        allowNull: false
      }
    })
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.dropTable('books')
  }
}
