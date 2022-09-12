const http = require("http")
const url = "http://api.weatherstack.com/current?access_key=5f92cd780c8d5b89e2034fb50d1230ec&query=48.483333,17.397222"

const request = http.request(url, (response) => {
    let data = ""

    response.on("data", (chunk) => {
        data = data + chunk.toString()
        })

    response.on("end", () => {
        const body = JSON.parse(data)
        console.log(body)
    })

})

request.on("error", (error) => {
    console.log("CHYBA!", error)
})


request.end()