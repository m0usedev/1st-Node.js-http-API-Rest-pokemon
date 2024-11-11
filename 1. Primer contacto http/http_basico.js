const http = require('node:http')
const fs = require('node:fs')

const server = http.createServer((req, res) => {
  res.setHeader('Content-Type', 'text/plain')
  if (req.url === '/') {
    res.statusCode = 200
    res.end('Hola Mundo')
  } else if (req.url === '/contacto') {
    res.statusCode = 200
    res.end('contacto')
  } else if (req.url === '/img') {
    try {
      const ruta = './pruebas/imagen.jpg'
      fs.readFile(ruta, (error, response) => {
        if (error) {
          res.statusCode = 500
          res.end(`error en el servidor: ${error}`)
        } else {
          res.statusCode = 200
          res.setHeader('Content-Type', 'image/jpg')
          res.end(response)
        }
      })
    } catch (error) {
      res.statusCode = 500
      res.end(`error en el servidor: ${error}`)
    }
  } else {
    res.statusCode = 404
    res.end('404')
  }
})

server.listen(1234, () => {
  console.log(`Escuchando en http://localhost:${server.address().port}`)
})
