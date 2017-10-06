# NodejsBaseApi

Schema con mongoose

se comienza a modular la aplicacion y luego se reactorizara

1) En models/product.js, se crea el Schema de products para poder acceder a este desde el resto de la app

```
'use strict'

const mongoose = require('mongoose')
const Schema = mongoose.Schema

const ProductSchema = Schema({
  name: String,
  picture: String,
  price: { type: Number, default: 0 },
  category: { type: String, enum: ['computers', 'phones', 'accesories']},
  description: String
})

module.exports = mongoose.model('Product', ProductSchema) //asi desde el resto de la aplicacion se sera accesible al modelo

```

entonces para usarlo se usa

```
const Product = require('./models/product') //indicando donde esta

app.post('/api/product', (req, res) =>{
  console.log("POST /api/product")
  console.log(req.body)

  let product = new Product()
  product.name = req.body.name
  product.picture = req.body.picture
  product.price = req.body.price
  product.category = req.body.category
  product.description = req.body.description

  product.save((err, productStored) =>{
    if (err) res.status(500).send({message: `Error al guardar en la base de datos: ${err}`})
    res.status(200).send({product: productStored})
  })
})

```
