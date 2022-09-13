const path = require("path")
const express = require("express")
const hbs = require("hbs")
const { response } = require("express")

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
        title: "Pošťasie",
        name: "doTLA"
    })
})

app.get("/help", (req, res) => {
    res.render("Help", {
        title: "Je to v riti",
        name: "a poriadne hlboko"
        })
})

app.get("/help/me", (req, res) => {
    res.render("Pomoc", {
        title: "Máte smúlu",
        name: "ser na to a zomri"
        })
})

app.get("/about", (req, res) => {
    res.render("about", {
        title: "Iný obrázok nemám",
        name: "doTLA"
    })
})

app.get("/weather", (req, res) => {
    res.send({
        forecast: "Svící",
        location: "Šadze"
    })
})

app.get("/help/*", (req, res) => {
    res.render("helpme", {
        title: "Pomoc sa nenašla",
        name: "ser na to a zomri",
        chybnaSprava: "Všetko biele (Ján Smrek)  Až umriem raz, nech je to v máji, keď kvitne biely orgován. Bo dnes som videl veniec- krásny!- niesli ho, dvere dokorán, a mňa ten veniec očaroval: vznešený biely velikán, v ňom orgován len samý biely a pri ňom biely tulipán!"
    })
})

app.get("*", (req, res) => {
    res.render("404", {
        title: "404",
        name: "doTLA",
        chybnaSprava: "Takto debilnú stránku môžeš zadať iba ty -_-"

    })
})

app.listen(3000, () => {
    console.log("Server is up on port 3000.")
})
