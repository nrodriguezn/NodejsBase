# NodejsBaseApi

##Directorio##

1. controllers
    *product.js
2. models
    *product.js  
3. app.js
4. routes
    *index.js
5. config.js


##Comentarios##

1. Controllers
  *Contiene la lógica de cada función*
2. models
  *Contiene la estructura del objeto producto*
3. app.js
  *contiene la funcionalidad de express*
4. routes/index.js
  *Contiene todas las rutas de la app*
5. config.js
  *variables de entorno*


##Schema Creados

const bcrypt = require('bcrypt-nodejs')
en terminal: npm i -S bcrypt-nodejs


```
const ProductSchema = Schema({
  name: String,
  picture: String,
  price: { type: Number, default: 0 },
  category: { type: String, enum: ['computers', 'phones', 'accesories']},
  description: String
})
```
