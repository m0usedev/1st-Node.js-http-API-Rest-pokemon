const { getPkemonJson } = require('./utilites/pokemon_json_actions.js')
const { response200, urlNotExist } = require('./utilites/response.js')

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
