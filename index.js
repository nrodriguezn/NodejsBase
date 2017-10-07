'use strict'

const mongoose = require('mongoose')
const app = require('./app')
const config = require('./config')


mongoose.connection.openUri(config.db, (err, res) =>{
  if(err) {
    return console.log(`error al conectar a la base de datos ${err}`)
  }  console.log('conexion a la base de datos establecida')
  app.listen(config.port, ()=>{
    console.log(`API rest corriendo en loclhost:${config.port}`)
  })

})
