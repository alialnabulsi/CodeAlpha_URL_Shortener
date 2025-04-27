// models/User.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const bcrypt = require('bcrypt');
const moment = require('moment');


class User extends Model {
  // Instance method to verify passwords
  async verifyPassword(password) {
    return await bcrypt.compare(password, this.user_password);
  }
}

User.init({
  user_id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  email: {
    type: DataTypes.STRING(255),
    allowNull: false,
    unique: true,
  },
  username: {
    type: DataTypes.STRING(50),
    allowNull: false,
    unique: true,
  },
  password_hash: {
    type: DataTypes.STRING(255),
    allowNull: false
  },
  firstName:{
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  lastName:{
    type: DataTypes.STRING(50),
    allowNull: false,
  },
  reset_token: {
    type: DataTypes.STRING(64),
    allowNull: true
  },
  reset_token_expiries_at: {
    type: DataTypes.DATE,
    allowNull: true,
    get() {
        return moment(this.getDataValue('reset_token_expiries_at')).format('YYYY-MM-DD HH:mm:SS');
    }
  },
  created_at: {
    type: DataTypes.DATE,
    allowNull: false,
    defaultValue: DataTypes.NOW,
    get() {
        return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:SS');
    }
  },
  last_login_at: {
    type: DataTypes.DATE,
    allowNull: true,
    get() {
        return moment(this.getDataValue('last_login_at')).format('YYYY-MM-DD HH:mm:SS');
    }
  },
  is_verified: {
    type: DataTypes.BOOLEAN,
    allowNull: false,
    defaultValue: false
  },
  api_key: {
    type: DataTypes.STRING(64),
    unique: true
  },
  account_status: {
    type: DataTypes.ENUM('active', 'suspended', 'banned'),
    allowNull: false,
    defaultValue: 'active'
  }
}, {
  sequelize,
  modelName: 'User',
  tableName: 'users',
  timestamps: true,
  createdAt: 'created_at',
  updatedAt: false,
});

module.exports = User;