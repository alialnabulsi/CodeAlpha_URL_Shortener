// models/User.js
const { DataTypes, Model } = require('sequelize');
const sequelize = require('../config/db');
const moment = require('moment');


class Clicks extends Model { 
}

Clicks.init({
    click_id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    short_code: {
        type: DataTypes.STRING(10),
        allowNull: false
    },
    referrer: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    ip_address: {
        type: DataTypes.STRING(45),
        allowNull: true
    },
    user_agent: {
        type: DataTypes.TEXT,
        allowNull: true
    },
    clicked_at: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: DataTypes.NOW,
        get() {
            return moment(this.getDataValue('clicked_at')).format('YYYY-MM-DD HH:mm:SS');
        }
    }
}, {
    sequelize,
    modelName: 'Clicks',
    tableName: 'clicks',
    timestamps: false
});

module.exports = Clicks;