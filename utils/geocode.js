const request = require('request');


const geoCode = (address, callback) => {
    const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1Ijoib3lpbmNvZGUiLCJhIjoiY2tveWI5bGQ1MDFiZjJvbjNhaHAxYmtwdSJ9.pI6hfDM1fIK6Ey-urDmn8g&limit=1`
    request({ url: url, json: true}, (error, response) => {
        if(error) {
            callback('Unable to connect to location services', undefined)
        } else if(response.body.features.length === 0) {
            callback('Unable to find location, Try another search', undefined)
        } else {
            callback(undefined, {
               longitude: response.body.features[0].center[0],
               latitude: response.body.features[0].center[1],
               location: response.body.features[0].place_name
            })
        }
    })

}







module.exports = geoCode