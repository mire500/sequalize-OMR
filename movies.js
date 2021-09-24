const sequelize = require("./db");
const { DataTypes, Model } = require("sequelize");

class Movies extends Model {}

Movies.init(
    {
        Movies: DataTypes.STRING,
        Duration: DataTypes.INTEGER,
    },


    {
        sequelize,
        modelName: "movies",      
        timestamps: false,
    }
);

module.exports = Movies;