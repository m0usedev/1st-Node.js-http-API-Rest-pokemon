const { deletePokemon } = require('./utilites/pokemon_actions.js')
const { getPkemonJson, savePokemonJson } = require('./utilites/pokemon_json_actions.js')
const { response200, response400, response500, urlNotExist } = require('./utilites/response.js')
const { spliteUrl } = require('./utilites/variety.js')
function deletes (url, request, response) {
  const urlPaths = spliteUrl(url)
  switch (`/${urlPaths[0]}`) {
    case '/delete':
      deleteDeletePokemon(parseInt(urlPaths[1]), response)
      break
    default:
      urlNotExist(response)
      break
  }
}

module.exports = {
  deletes
}

function deleteDeletePokemon (idPokemon, response) {
  if (isNaN(idPokemon)) {
    urlNotExist(response)
    return
  }
  ;(
    async () => {
      const jsonPok = await getPkemonJson()
      const delPok = deletePokemon(jsonPok, idPokemon)
      if (delPok) {
        savePokemonJson(jsonPok)
          .then(() => {
            response200(response, {
              response: 'Pokemon eliminado.',
              object: {
                'Pokemon eliminado': delPok
              }
            })
          })
          .catch(() => {
            response500(response, {
              response: 'No se pudo eliminar el pokemon.',
              object: {
                'Pokemon que se queria eliminar': delPok
              }
            })
          })
      } else {
        response400(response, {
          response: 'No existe el pokemon que quieres borrar.',
          object: {
            'Numero Pokemon': idPokemon
          }
        })
      }
    })()
}
