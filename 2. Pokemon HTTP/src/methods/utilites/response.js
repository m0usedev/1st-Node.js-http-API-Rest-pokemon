function response200 (response, jsonrResponse) {
  response.statusCode = 200
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(jsonrResponse))
}

function response400 (response, jsonrResponse) {
  response.statusCode = 400
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(jsonrResponse))
}

function response500 (response, jsonrResponse) {
  response.statusCode = 501
  response.setHeader('Content-Type', 'application/json')
  response.end(JSON.stringify(jsonrResponse))
}

function urlNotExist (response) {
  response400(response, { response: 'La url no existe' })
}

module.exports = {
  response200,
  response400,
  response500,
  urlNotExist
}
