const request = require ("request")

const forecast = (latitude, longitude, callback) => {
    const url = "http://api.weatherstack.com/current?access_key=5f92cd780c8d5b89e2034fb50d1230ec&query=" + latitude + "," + longitude + "&units=m"

request({ url, json: true }, (error, { body }) => {
    if (error) {
        callback("Nemáš internet debil, jak sceš dostat počasí!", undefined)
    } else if (body.error) {
        callback("To si si z jakej rici vytáhol? Šak to nevím nájst!", undefined)
    } else {
        callback(undefined, body.current.weather_descriptions[0] + ". Momentálne máme " + body.current.temperature + " stupňov. " + "Pocitovo máme " + body.current.feelslike + " stupňov.")
    }
})
}

module.exports = forecast