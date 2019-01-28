var mongoose = require('mongoose')
var Schema = mongoose.Schema

var DataCpuSchema = new Schema({
    nama: String,
    type: String,
    platfrom: String,
    rilis: Number,
    ramSisa: Number,
    ramTotal: Number
    
})

var DataCpu = mongoose.model('DataCpu',DataCpuSchema)

module.exports = DataCpu