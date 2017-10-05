# NodejsBaseApi

## Proyecto para iniciar cualquier proyecto, con las sigueintes caracteristicas:

//caracteristicas



Revisar que se tiene instalado node y npm

1. [node -v](https://nodejs.org/en/)
2. npm -v

Para empezar un proyecto de node, simplemente

```
npm init
```

Se debe crear un fichero package.json

Luego se debe instalar express, conocido, estable...

```
  npm install express --save
  npm i express -S
```

--save instala las dependencias en package.json

Luego crear index.js en la raiz del proyecto

```
'use strict'

const express = require('express')

const app = express()

app.listen(3000, ()=>{
  console.log('API rest corriendo en loclhost:3000')
})

```

Luego instalamos body-parser para hacer peticiones tipo REST para poder tratarlos y manejarlos mejor frente a la base de datos, en index.js
```
npm i -S body-parser
```

```
'use strict'

const express = require('express')
const bodyParser = require('body-parser')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.listen(port, ()=>{
  console.log(`API rest corriendo en loclhost:${port}`)
})

```

especial atencion en console.log, donde se utilizaron comillas invertidas para colocar variables en el argumento

Para correr el servidor usar:
  *node index.js*

Luego se instala
  *npm i -D nodemon*

Momento en que se crea una libreria devDependencies en package.json

Luego se crea en package.json, en el array scripts:
  * "start": "nodemon index.js",*
  * npm start*

En este punto el servidor se debe recargar por si soo

En index.html
```
app.get('/hola', (req, res) =>{
  res.send({message: 'Hola Mundo'})
})//devuelve un callback que es la peticion y la respuesta
app.get('/holap/:name', (req, res) =>{
  res.send({send: `Hola ${req.params.name}!`})
})

```
