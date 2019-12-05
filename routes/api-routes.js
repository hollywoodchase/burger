// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Requiring our Todo model
var db = require("../models");

// Routes
// =============================================================
module.exports = function (app) {

  // POST route for saving a new post
  app.post("/api/burgers", function (req, res) {
    db.Burger.create({
      name: req.body.name,
      devoured: req.body.devoured
    })
      .then(function (dbBurger) {
        res.json(dbBurger);
      })
      .catch(function (err) { res.status(401).json(err); });
  });

  // GET route for getting all of the posts
  app.get("/api/burgers", function (req, res) {
    db.Burger.findAll({})
      .then(function (dbBurger) {
        res.json(dbBurger);
      });
  });

  // Get route for retrieving a single post
  app.get("/api/burgers/:id", function (req, res) {
    db.Burger.findOne({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbBurger) {
        res.json(dbBurger);
      });
  });

  // DELETE route for deleting posts
  app.delete("/api/burgers/:id", function (req, res) {
    db.Burger.destroy({
      where: {
        id: req.params.id
      }
    })
      .then(function (dbBurger) {
        res.json(dbBurger);
      });
  });
};
