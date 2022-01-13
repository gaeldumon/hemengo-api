// Import necessary modules
const { DataTypes } = require('sequelize')
const db = require('../db.config')

/**
 * Status model definition.
 * It is mostly about orders status but not only. 
 */
const Status = db.define('Status', {
    id: {
        type: DataTypes.INTEGER(11),
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING(64),
        allowNull: false,
        indexes: [{ unique: true, fields: ["name"] }]
    },
    message: {
        type: DataTypes.STRING(255),
        allowNull: true,
        defaultValue: ""
    }
},
    { paranoid: true }
)

module.exports = Status