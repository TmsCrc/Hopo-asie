const path = require("path")
const express = require("express")
const hbs = require("hbs")
const { response } = require("express")
const geocode = require ("./utils/geocode")
const forecast = require ("./utils/forecast.js")

const app = express()
const port = process.env.PORT || 3000

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
        title: "Počasie",
        name: "doTLA"
    })
})

app.get("/help", (req, res) => {
    res.render("Help", {
        title: "Pomoc nepríde",
        name: "Bolo mi potešením spoznať Vás, ZBohom!"
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
        title: "O čom",
        name: "doTLA"
    })
})

app.get("/weather", (req, res) => {
    if (!req.query.address) {
        return res.send ({
            error: "No ja z hlavy neviem, kde chceš vedieť aké je počasie ty vreco"
        })
    }

    geocode(req.query.address, (error, { latitude, longitude, location } = {}) => {
        if (error) {
            return res.send({ error })
        } 
    
        forecast(latitude, longitude, (error, forecastData) => {
            if (error) {
                return res.send({ error })
            }

            res.send ({
                forecast: forecastData,
                location,
                address: req.query.address
            })
          })
    }) 
})

app.get("/products", (req, res) => {
    if (!req.query.search) {
        return res.send({
            error: "Musíš zadať čo chceš hladať"
        })
    } 
    
    console.log(req.query.search)
    res.send({
        product: []
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

app.listen(port, () => {
    console.log("Server is up on port ." + port)
})
