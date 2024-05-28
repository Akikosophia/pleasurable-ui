// Importeer het npm pakket express uit de node_modules map
import express, { application, json, request } from 'express'

// Importeer de zelfgemaakte functie fetchJson uit de ./helpers map
import fetchJson from './helpers/fetch-json.js'

// Maak een nieuwe express app aan
const app = express()

// Stel ejs in als template engine
app.set('view engine', 'ejs')

// Stel de map met ejs templates in
app.set('views', './views')

// Gebruik de map 'public' voor statische resources, zoals stylesheets, afbeeldingen en client-side JavaScript
app.use(express.static('public'))

app.use(express.urlencoded({extended: true }))

// Stel het oba profile in
const apiData = 'https://fdnd-agency.directus.app/items/oba_profile'

// Stel het oba profile in
const apiFamily = 'https://fdnd-agency.directus.app/items/oba_family'

// Stel het basis endpoint in
const apiUrl = 'https://fdnd-agency.directus.app/items/oba_item'

const apiItem = (apiUrl + 'oba_item')
const apiProfile = apiUrl + 'oba_profile'


// Home pagina
app.get('/', function(request, response) {
    // console.log(savedItems)
    fetchJson('https://fdnd-agency.directus.app/items/oba_item').then((items) => {
        response.render('home', {           
            items: items.data, /*hier zeg ik dat iedereen getoond moet worden*/
            // savedItems: savedItems
        })
    });
})


// Profielen pagina
app.get('/profielen', function(request, response) {
    // console.log(savedItems)
    fetchJson('https://fdnd-agency.directus.app/items/oba_profile').then((profiles) => {
        response.render('profielen', {           
            profiles: profiles.data
        })
    });
})


// Profiel pagina
app.get('/profiel', function(request, response) {
    // console.log(savedItems)
    fetchJson('https://fdnd-agency.directus.app/items/oba_profile').then((items) => {
        response.render('profiel', {  
            // profiles: profiles.data,     
             /*hier zeg ik dat iedereen getoond moet worden*/
            // savedItems: savedItems
        })
    });
})




// Stel het poortnummer in waar express op moet gaan luisteren
app.set('port', process.env.PORT || 8001)

// Start express op, haal daarbij het zojuist ingestelde poortnummer op
app.listen(app.get('port'), function () {
  // Toon een bericht in de console en geef het poortnummer door
  console.log(`Application started on http://localhost:${app.get('port')}`)
});