const express = require("express")
const app = express()
const PORT = 3002
const weather = require("./weather.json")

app.get("/hello", (req, res) => {
    res.send("Strink me down, Zeus!")
})

app.get("/weather", (req, res) => {
    let {searchQuery} = req.query;
    // console.log(cityName);
    let lon = req.query.lon;
    let lat = request.query.lat;

    console.log(`${cityName}: lon is: ${lon}, lat is: ${lat}`)

    const city = weather.find(city => city.city_name.toLowerCase() === cityName)
})

class Forecast{
    constructor(day){
        this.date = day.valid_date;
        this.description = day.weather.description
    }
}

app.listen(PORT, () => {console.log("Listening!")})