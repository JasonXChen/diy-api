'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class organization extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      models.organization.hasMany(models.team);
      models.organization.belongsToMany(models.sponsor, {through: "organizations_sponsors"});
    }
  }
  organization.init({
    name: DataTypes.STRING,
    founded: DataTypes.DATE,
    location: DataTypes.STRING,
    abbreviation: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'organization',
  });
  return organization;
};