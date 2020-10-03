const express = require('express');

const router = express.Router();

// add myControllers 
const myControllers = require('../controllers/controllers.js');

//console.dir(myControllers);

module.exports = (app) => {

    router.get("/allfilms", async (req, res, next) => {
      try {
        const allFilms = await myControllers.viewAll(app, req, res);
        res.render("allFilms", {
          title: "All Films",
          films: allFilms,
        });
      } catch (e) {
        //this will eventually be handled by your error handling middleware
        next(e);
      }
    });


        router.get("/film/:filmID", async (req, res, next) => {
           try {
            const oneFilm = await myControllers.viewItem(app, req, res);
            res.render("oneFilm", {
              title: "All Films",
              film: oneFilm,
            });
          } catch (e) {
            //this will eventually be handled by your error handling middleware
            next(e);
          }
        });


  
    return router;

}
