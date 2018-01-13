'use strict';
var bcrypt = require("bcrypt");

module.exports = (sequelize, DataTypes) => {
  var user = sequelize.define('user', {
    firstname: DataTypes.STRING,
    lastname: DataTypes.STRING,
    email: {}DataTypes.STRING,
    password: DataTypes.STRING
  });
  user.associate = function(models) {
    models.user.hasMany(models.workout);
  };
  {

  user.prototype.
    var user = this.get();
    delete user.password;
    return user;
  }
  return user;
};