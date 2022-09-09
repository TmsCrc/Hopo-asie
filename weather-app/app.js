const request = require("request")
const geocode = require ("./utils/geocode")
// const url = "http://api.weatherstack.com/current?access_key=5f92cd780c8d5b89e2034fb50d1230ec&query=48.50617,17.430404"

// request({ url: url, json: true }, (error, response) => {
//     if (error) {
//         console.log("Nemáš internet debile!")
//     } else if (response.body.error) {
//         console.log("To si si z jakej rici vytáhol? Šak to nevím nájst!")
//     }
//     else {
//         console.log(response.body.current.weather_descriptions[0] + ". Ščuleky je " + response.body.current.temperature + " stupnóf. " + "Cícíš to jak keby bolo " + response.body.current.feelslike + " stupnóf.")
//     }
// })


geocode("Lošonec", (error, data) => {
    console.log("Error", error)
    console.log("Data", data)
})