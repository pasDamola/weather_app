const geoCode = require('./utils/geocode')
const forecast = require('./utils/forecast')
const yargs = require('yargs')



geoCode('Abuja', (error, data) => {
    if(error) {
      return console.log(error)
    }


    // callback chaining
    forecast(data.latitude,  data.longitude, (error, forecastData) => {
        if(error) {
          return  console.log(error)
        }
        console.log(data.location)
        console.log(forecastData)
    })
})

yargs.command({
    command: 'geocode',
    describe: 'Geocode specific location provided',
    builder: {
        location: {
            describe: 'User Location',
            demandOption: true,
            type: 'string'
        },
    },
    handler() {
        geoCode()
    }
})

