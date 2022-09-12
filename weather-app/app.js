const request = require("request")
const geocode = require ("./utils/geocode")
const forecast = require ("./utils/forecast.js")

const address = process.argv[2]

console.log(process.argv)

geocode("Smolenice", (error, data) => {
    if (error) {
        return console.log(error)
    } 

    forecast(data.latitude, data.longitude, (error, forecastData) => {
        if (error) {
            return console.log(error)
        }


        console.log(data.location)
        console.log(forecastData)
      })
})

