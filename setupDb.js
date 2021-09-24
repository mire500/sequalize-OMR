
const Cinema = require("./cinema");
const Movies = require("./movies");
const Screening = require("./screening");
const db = require("./db");

async function setupDb() {
    Cinema.hasMany(Movies);
    Movies.belongsTo(Cinema);

    Movies.hasMany(Screening);
    Screening.belongsTo(Movies);
    await db.sync();
}

module.exports = setupDb;