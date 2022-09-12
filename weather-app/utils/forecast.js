const request = require ("request")

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=5f92cd780c8d5b89e2034fb50d1230ec&query=" + latitude + "," + longitude + "&units=m"

request({ url: url, json: true }, (error, response) => {
    if (error) {
        callback("Nemáš internet debil, jak sceš dostat počasí!", undefined)
    } else if (response.body.error) {
        callback("To si si z jakej rici vytáhol? Šak to nevím nájst!", undefined)
    } else {
        callback(undefined, response.body.current.weather_descriptions[0] + ". Ščuleky je tam " + response.body.current.temperature + " stupnóf. " + "Cícíš to jak keby bolo " + response.body.current.feelslike + " stupnóf.")
    }
})
}
module.exports = forecast