const path = require("path")
const express = require("express")

const app = express()
const publicDirectoryPath = path.join(__dirname, "../public")

app.use(express.static(publicDirectoryPath))

app.get("/help", (req, res) => {
    res.send([{
        name: "Tomas"
        }, {
        name: "Mačák"
        }])
})

app.get("/about", (req, res) => {
    res.send("<h1>What is this all about?!??!</h1>")
})

app.get("/weather", (req, res) => {
    res.send({
        forecast: "Svící",
        location: "Šadze"
    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000.")
})
