'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const port = process.env.PORT || 3001


mongoose.connection.openUri('mongodb://localhost:27017/shop', (err, res) =>{
  if(err) {
    return console.log(`error al conectar a la base de datos ${err}`)
  }  console.log('conexion a la base de datos establecida')
  app.listen(port, ()=>{
    console.log(`API rest corriendo en loclhost:${port}`)
  })

})
