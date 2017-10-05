# NodejsBaseApi

Instalando MongoDB

```
npm install -i -S mongoose
MongoD  //para iniciar la base de datos
mongo //ingresamos al shell de moongo
```
una vez instalado mongo necesitamos un package para usarla en react-native, la libreria se llama mongoose

```
npm i -S mongoose
```

asi se deberia agregar la libreria automaticamente
Se importa mongoose en index.js

```
const mongoose = require('mongoose')
```

Asi entonces, index.js debe parecer a

```
'use strict'

const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

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

app.get('/api/product', (req, res) => {
  res.send(200, {products: []})
})

app.get('/api/product/:productid', (req,res)=>{

})
app.post('/api/product', (req, res) =>{
    console.log(req.body)//viene lo del cuerpo de la peticion
    res.status(200).send({message: `el producto se ha recibido`})
})
app.put('/api/product/:productId', (req, res)=>{

})
app.delete('/api/delete/:productId', (req, res) =>{

})


mongoose.connect('mongodb://localhost:/27017/shop', (err, res) =>{
  if(err) throw err
  console.log('conexion a la base de datos establecida')
  app.listen(port, ()=>{
    console.log(`API rest corriendo en loclhost:${port}`)
  })

})
```
