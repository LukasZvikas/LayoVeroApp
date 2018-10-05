const mongoose = require("mongoose");
const routeController = require("../controllers/routeController");

module.exports = app => {
  app.post("/getCities", routeController.getRoutes);

  app.post("/partialQuery", routeController.getPartialQuery);

};
