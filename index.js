//Importando librería de express
const express = require('express')
//Creando aplicación de express
const cors = require('cors')
const app = express()

const corsOptions = {
  origin: 'https://facebook.com'
}

app.get('/products/:id', cors(corsOptions), (req, res, next) => {
  res.send('mensajito')
})


const server = app.listen(3000, () => {
  console.log('Listening on port %s', server.address().port)
})