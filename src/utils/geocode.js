const request = require ("request")

const geocode = (address, callback) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoiYmFzaXN0YTE5OTMiLCJhIjoiY2w3dTdrNjc2MTZwbjNycGxzZXVweXliMCJ9.zW1qUadjliMnXB5oh-n--A"

    request({ url, json: true}, (error, { body }) => {
        if (error) {
            callback("Nemáš net prasnica!", undefined)
        } else if (body.features.lenght === 0) {
            callback("Si si z riti takú cépečkársku pjatčovinu vytáhól?", undefined)
        } else {
            callback(undefined, {
                latitude: body.features[0].center[1],
                longitude: body.features[0].center[0],
                location: body.features[0].place_name
            })
        }
    })
}

module.exports = geocode