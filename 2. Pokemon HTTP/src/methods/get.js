const {
  getPkemonJson,
  response200,
  urlNotExist
} = require('../../dependences.js')

function gets (url, response) {
  switch (url) {
    case '/':
      response.end()
      break
    case '/pokemon': {
      ;(
        async () => {
          const jsonPok = await getPkemonJson()
          response200(response, jsonPok)
        }
      )()
      break
    }
    default:
      urlNotExist(response)
      break
  }
}

module.exports = {
  gets
}
