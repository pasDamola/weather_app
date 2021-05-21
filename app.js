const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=28ad3f4c227aee60cd4eed5feaca47da&query=New%20York'


request({ url: url, json: true}, (err, res) => {
    const {temperature, feelslike} = res.body.current
    console.log(`It is currently ${temperature} degrees out. It feels like ${feelslike}`)
})


const geoCodeUrl = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1Ijoib3lpbmNvZGUiLCJhIjoiY2tveWI5bGQ1MDFiZjJvbjNhaHAxYmtwdSJ9.pI6hfDM1fIK6Ey-urDmn8g&limit=1"

function getLangAndLong(url) {
    request({ url: url, json: true}, (err, res) => {
        const [ longitude, latitude ] = res.body.features[0].center
    })
}



// Geocoding
// Address -> Lat/Long -> weather