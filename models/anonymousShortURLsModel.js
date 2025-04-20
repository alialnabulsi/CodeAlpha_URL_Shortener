// models/User.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const moment = require('moment');


class AnonymousShortURLs extends Model { 
}

AnonymousShortURLs.init({
    short_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        references: {
            model: 'users',
            key: 'user_id'
        },
        onDelete: 'CASCADE'
    },
    long_url: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    short_code: {
        type: DataTypes.STRING(10),
        allowNull: false,
        unique: true
    },
    custom_alias: {
        type: DataTypes.STRING(20),
        allowNull: true,
        unique: true
    },
    clicks: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue: 0
    },
    expires_at: {
        type: DataTypes.DATE,
        allowNull: true,
        get() {
            return moment(this.getDataValue('expires_at')).format('YYYY-MM-DD HH:mm:SS');
        }
    },
    created_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        get() {
            return moment(this.getDataValue('created_at')).format('YYYY-MM-DD HH:mm:SS');
        }
    }
},
 {
    sequelize,
    modelName: 'UserShortURLs',
    tableName: 'user-short-urls',
    timestamps: false
});

module.exports = AnonymousShortURLs;