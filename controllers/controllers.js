// VIEW CONTROLLER

var ObjectId = require("mongodb").ObjectId; 

module.exports = {
  viewAll: async function (app, req, res) {
    const filmsCollection = app.get("myDb").collection("filmsCollection");
    var allFilms = await filmsCollection.find({}).toArray();
    console.dir(allFilms);
    return allFilms;
  },

  viewItem: async function (app, req, res) {
    let filmID = req.params.filmID;
    var o_id = new ObjectId(filmID);
    const filmsCollection = app.get("myDb").collection("filmsCollection");
    var oneFilm = await filmsCollection.find({ _id: o_id }).toArray();
    console.dir(oneFilm);
    return oneFilm[0];
  },
};
