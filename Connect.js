var mongoose = require('mongoose')


var url = 'mongodb://ronald:1234@localhost:27017/db_mongoose'

mongoose.connect(url,()=>{
    console.log('Terhubung Ke MongoDB')
})