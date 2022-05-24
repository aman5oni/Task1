
const citiesForRoute = (app, fs) => {

    const jsonData = "./jsondata/cities.json";

    app.get("/api/get-cities", (req, res) => {

        fs.readFile(jsonData, (err, data) => {
            if (err) {
                console.log(err);
            }
            res.send(JSON.parse(data));
        });
    });
}

module.exports = citiesForRoute;
    