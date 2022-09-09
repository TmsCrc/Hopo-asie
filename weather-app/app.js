const request = require("request")
const geocode = require ("./utils/geocode")
const forecast = require ("./utils/forecast.js")

geocode("Lošonec", (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})

forecast(48.483333, 17.4, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
  })