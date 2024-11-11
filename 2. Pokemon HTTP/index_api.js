const http = require('node:http')

const { PATHS } = require('./poyectPaths.js')
const { gets } = require(PATHS.get)

// const { gets } = require('./src/methods/get.js')
const { posts } = require('./src/methods/post.js')
const { deletes } = require('./src/methods/delete.js')
const { puts } = require('./src/methods/put.js')

const server = http.createServer((request, response) => {
  const { method, url } = request
  switch (method) {
    case 'GET':
      gets(url, response)
      break
    case 'POST':
      posts(url, request, response)
      break
    case 'DELETE':
      deletes(url, request, response)
      break
    case 'PUT':
      puts(url, request, response)
      break
    default:
      response.statusCode = 400
      response.end('Algo no salio bien en el method')
      break
  }
})

server.listen(1234, () => {
  console.log(`Escuchando en http://localhost:${server.address().port}`)
})
