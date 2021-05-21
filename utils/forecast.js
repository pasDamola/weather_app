const request = require('request')


const forecast = (longitude, latitude, callback) => {
    const url = `http://api.weatherstack.com/current?access_key=28ad3f4c227aee60cd4eed5feaca47da&query=${longitude},${latitude}&untis=f`
    request({ url: url, json: true}, (error, response) => {
        if(error){
            callback('Unable to connect to weather forecast service', undefined)
        } else if(response.body.error) {
            callback('Unable to find location', undefined)
        } else {
            const {temperature, feelslike} = response.body.current
            callback(undefined,`It is currently ${temperature} degrees out. It feels like ${feelslike}`)
        }
    })
}

module.exports = forecast