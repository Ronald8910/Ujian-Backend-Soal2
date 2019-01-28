var mongoose = require('mongoose')
var DataCpu = require('./Route/route')

var url = 'mongodb://ronald:1234@localhost:27017/db_mongoose'

mongoose.connect(url,()=>{
    console.log('Terhubung Ke MongoDB')
})

new DataCpu({
    namaCpu: 'Ronald_CPU',
    type: 'Windows_NT',
    platfrom: 'win32',
    rilis: 10017134,
    ramSisa: 11338039296,
    ramTotal: 17063497728
}).save()
.then ((x)=>{
    console.log(x)
})
.catch ((x)=>{
    console.log (x)
})