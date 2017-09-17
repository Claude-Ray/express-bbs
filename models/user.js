'use strict';

module.exports = (sequelize, DataTypes) => sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER.UNSIGNED,
    allowNull: false,
    unique: true,
    autoIncrement: true,
    primaryKey: true,
    comment: 'user id'
  },
  name: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
    commemt: 'user name'
  },
  password: {
    type: DataTypes.STRING(50),
    allowNull: false,
    commemt: 'password'
  },
  createTime: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
    comment: 'register time'
  },
  updateTime: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
    comment: 'update time'
  },
  deleteTime: {
    type: DataTypes.BIGINT.UNSIGNED,
    allowNull: false,
    defaultValue: 0,
    comment: 'delete time'
  }
}, {
  tableName: 'user',
  freezeTableName: true,
  timestamps: false
});
