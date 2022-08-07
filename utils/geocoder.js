const NodeGeoCoder = require('node-geocoder');
const dotenv = require('dotenv')
dotenv.config({ path: '../config/config.env' })


const options = {
    provider: 'mapquest',
    httpAdapter: 'https',
    apiKey: 'dLFdT6kngsCUYYJI5P6UmQYJBWxgZwR2',
    formatter: null
}

const geocoder = NodeGeoCoder(options)

module.exports = geocoder;