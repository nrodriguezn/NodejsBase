# NodejsBaseApi


Se desarrollaran productos, rutas de tipo:
  * get
  * post
  * put
  * delete

index js
```index js
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



app.listen(port, ()=>{
  console.log(`API rest corriendo en loclhost:${port}`)
})

```

para ingresar un producto en postman:
  ```
  method POSt
  BODY:_
    name MacBook Pr
    Price 1200000
    photo mackbook.png
    category laptop
  ```
  en la terminal se podrá ver el body del producto enviado.
