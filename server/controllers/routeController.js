const Routes = require("../models/routeSchema");

exports.getRoutes = async (req, res, next) => {
  Routes.find({}, (err, routes) => {
    const cityArray = [];
    const cities = routes.map(route => {
      cityArray.push(route.city);
    });

    console.log(cityArray);
    res.send(cityArray);
  });
};
