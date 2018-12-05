//Importando librería de express
const express = require('express')
//Creando aplicación de express
const app = express()
//Agregando función para obtener los datos por POST en un json
//app.use(express.urlencoded())
app.use(express.urlencoded())
//Petición GET desde raíz
app.get('/', (req, res) => {
    /*res.send('' +
      '<form method="post">' +
      '<input type="text" placeholder="Nombre" name="nombre">'+
      '<input type="text" placeholder="Apellido paterno" name="ap">'+
      '<input type="text" placeholder="Apellido materno" name="am">'+
      '<input type="submit" value="Aceptar">'+
      '</form>'
    )*/
    //console.log(req.headers)
  console.log(req.header('User-Agent'))
    res.send('')
})

//Petición POST desde raíz
app.post('/', (req, res) => {
    //console.log(req.body)
    res.send(req.body)
})

//Función cuando el servidor esté listo
app.listen(3000, () => console.log('Server ready'))