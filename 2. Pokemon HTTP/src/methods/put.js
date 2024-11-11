const { PROPERTIES_POKEMON } = require('../utilites/globales')
const { getPkemonJson, savePokemonJson } = require('./utilites/pokemon_json_actions.js')
const { wrongProperties, wrongValueType, pokemonExist } = require('./utilites/pokemon_validations')
const { response200, response400, response500, urlNotExist } = require('./utilites/response.js')
const { modifyPokemon } = require('./utilites/pokemon_actions.js')
const { spliteUrl } = require('./utilites/variety.js')

function puts (url, request, response) {
  const urlPaths = spliteUrl(url)
  switch (`/${urlPaths[0]}`) {
    case '/modify-pokemon':
      putModifyPokemon(parseInt(urlPaths[1]), request, response)
      break
    default:
      urlNotExist(response)
      break
  }
}

module.exports = {
  puts
}

function putModifyPokemon (idPokemon, request, response) {
  if (isNaN(idPokemon)) {
    urlNotExist(response)
    return
  }
  let body = ''

  request.on('data', (chunk) => {
    body += chunk
  })

  request.on('end', async () => {
    const jsonPok = await getPkemonJson() // recogemos json
    const newPokData = JSON.parse(body) // transformamos en json el body

    if (!await validationModify(response, jsonPok, newPokData, idPokemon)) {
      const { pokAfterModify, listPoksAfterModify } = modifyPokemon(jsonPok, newPokData, idPokemon)
      savePokemonJson(listPoksAfterModify)
        .then(() => {
          response200(response, {
            response: 'Exito en la modificacion del pokemon',
            Pokemon: pokAfterModify
          })
        })
        .catch(() => {
          response500(response, {
            response: 'No se pudo modificar el pokemon',
            Pokemon: newPokData
          })
        })
    }
  })
}

async function validationModify (response, jsonPok, newPokData, idPokemon) {
  return Promise.all([
    wrongBodyPokemon(newPokData),
    pokemonExist(jsonPok, idPokemon)
  ]).then(([validationPok, pokemonExist]) => {
    return putValidationPok(response, newPokData, validationPok, pokemonExist)
  })
}
async function wrongBodyPokemon (pokemon) {
  return Promise.all([
    wrongProperties(pokemon),
    wrongValueType(pokemon)
  ]).then(([wrongProperties, wrongValueType]) => {
    const validationPok = {}
    if (wrongProperties) {
      validationPok.wrongProperties = wrongProperties
      validationPok.expectedProperties = PROPERTIES_POKEMON.reduce((acc, obj) => {
        // Añadimos cada par clave-valor del objeto actual al acumulador
        return { ...acc, ...obj }
      }, {})
    }
    if (wrongValueType) validationPok.wrongValueType = wrongValueType
    return Object.keys(validationPok).length > 0 ? validationPok : null
  })
}

async function putValidationPok (response, pokemon, validationPok, pokemonExist) {
  if (validationPok && !pokemonExist) {
    response400(response, {
      response: 'Hay un problema con las propiedades que has mandado modificar y el polemon no existe',
      pokemonValidation: validationPok,
      pokemon
    })
    return true
  } else {
    if (validationPok) {
      response400(response, {
        response: 'Hay un problema con las propiedades que has mandado modificar',
        pokemonValidation: validationPok
      })
      return true
    }
    if (!pokemonExist) {
      response400(response, {
        response: 'El pokemon ya existe',
        pokemon
      })
      return true
    }
    return false
  }
}
