const request = require ("request")

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYmFzaXN0YTE5OTMiLCJhIjoiY2w3dTdrNjc2MTZwbjNycGxzZXVweXliMCJ9.zW1qUadjliMnXB5oh-n--A"

    request({ url: url, json: true}, (error, response) => {
        if (error) {
            callback("Nemáš net prasnica!", undefined)
        } else if (response.body.features.lenght === 0) {
            callback("Si si z riti takú adresu cépečkársku pjatčovinu vyťáhol?", undefined)
        } else {
            callback(undefined, {
                latitude: response.body.features[0].center[1],
                longitude: response.body.features[0].center[2],
                location: response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode