module.exports = (sequelize, DataTypes) => {
  const Book = sequelize.define('Book', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },

    title: DataTypes.STRING,

    numberPages: {
      type: DataTypes.INTEGER,
      field: 'number_pages'
    },

    author: DataTypes.STRING,

    releaseYear: {
      type: DataTypes.STRING,
      field: 'release_year'
    },

    inventory: DataTypes.INTEGER,

    launchCountry: {
      type: DataTypes.STRING,
      field: 'launch_country'
    }
  },
  {
    tableName: 'books',
    timestamps: false
  })

  return Book
}
