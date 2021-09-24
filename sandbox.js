// sandbox.js
const sequelize = require("./db");
const Cinema = require("./cinema");
const Movies = require("./movies");
const Screening = require("./screening");

async function sandbox() {
//creates new tables when file is run 
    await sequelize.sync();
}
sandbox();