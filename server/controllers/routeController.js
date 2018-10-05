const Routes = require("../models/routeSchema");

exports.getRoutes = async (req, res, next) => {
  const city = req.body.city;
  Routes.find({}, (err, routes) => {
    const cityArray = [];
    const cities = routes.map(route => {
      if (route.city == city) {
        cityArray.push(route);
      }
    });

    console.log("ARRAY", cityArray);
    res.send(cityArray);
  });
};

exports.getPartialQuery = async (req, res, next) => {
  const letters = req.body.partialQuery;
  console.log(letters);

  Routes.find(
    { city: { $regex: "^" + letters, $options: "im" } },
    (err, routes) => {
      console.log(routes);
      if (err) {
        return next(err);
      }

      const cities = routes.map(route => {
        return route.city;
      });

      const uniqueCities = [...new Set(cities)];

      res.send(uniqueCities);
    }
  );
};
