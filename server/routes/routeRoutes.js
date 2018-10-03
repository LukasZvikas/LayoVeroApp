const mongoose = require("mongoose");
const routeController = require("../controllers/routeController");

module.exports = app => {
  app.get("/getCities", routeController.getRoutes);

  app.post("/partialQuery", routeController.getPartialQuery);

};
