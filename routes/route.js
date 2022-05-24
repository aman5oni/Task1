const citiesForRoute = require("./cities");

const appRouter = (app, fs) => {
    app.get('/', (req, res) => {
        res.send('Welcome To My Api Server');
      });
      citiesForRoute(app, fs);
};

module.exports = appRouter;