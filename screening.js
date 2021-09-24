const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Screening extends Model {}

Screening.init(
    {
        screenNum: DataTypes.STRING,
        MoviesID: DataTypes.INTEGER,
        screentime: DataTypes.INTEGER,
        cinema: DataTypes.INTEGER,
    },


    {
        sequelize,
        modelName: "sreening",      
        timestamps: false,
    }
);



module.exports = Screening;