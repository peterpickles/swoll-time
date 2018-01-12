'use strict';
module.exports = (sequelize, DataTypes) => {
  var workout = sequelize.define('workout', {
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    nextnotice: DataTypes.DATE
  // }
  // , {
  //   classMethods: {
  //     associate: function(models) {
  //       models.workout.belongsTo(models.user);
  //     }
  //   }
  });
  workout.associate = function(model) {
    models.workout.belongsTo(models.user);
  };
  return workout;
};