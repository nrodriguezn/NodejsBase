'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3001

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.get('/hola', (req, res) =>{
  res.send({message: 'Hola Mundo'})
})//devuelve un callback que es la peticion y la respuesta
app.get('/holap/:name', (req, res) =>{
  res.send({send: `Hola ${req.params.name}!`})
})


app.listen(port, ()=>{
  console.log(`API rest corriendo en loclhost:${port}`)
})
