const path = require("path")
const express = require("express")
const hbs = require("hbs")

const app = express()

// Define paths for express config
const publicDirectoryPath = path.join(__dirname, "../public")
const viewsPath = path.join(__dirname, "../templates/views")
const partialPath = path.join(__dirname, "../templates/partials")

// Setup handlebars engine and views location
app.set("view engine", "hbs")
app.set("views", viewsPath)
hbs.registerPartials(partialPath)

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))

app.get("", (req, res) => {
    res.render("index", {
        title: "Pošťastie",
        name: "Tomas"
    })
})

app.get("/help", (req, res) => {
    res.render("Pomooooc", {
        title: "Je to v riti",
        name: "a poriadne hlboko"
        })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "O mne",
        name: "Tomas"
    })
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
