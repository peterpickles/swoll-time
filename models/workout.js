'use strict';
module.exports = (sequelize, DataTypes) => {
  var workout = sequelize.define('workout', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    nextnotice: DataTypes.DATE
  });
  workout.associate = function (models) {
  };
  return workout;
};