const {
  addPokemon,
  pokemonExist,
  pokemonValidatorStructure,
  response200,
  response400,
  response500,
  urlNotExist,
  getPkemonJson,
  savePokemonJson
} = require('../../dependences.js')

function posts (url, request, response) {
  switch (url) {
    case '/add-pokemon':
      postAddPokemon(request, response)
      break
    default:
      urlNotExist(response)
      break
  }
}

module.exports = {
  posts
}

function postAddPokemon (request, response) {
  let body = ''

  request.on('data', (chunk) => {
    body += chunk
  })

  request.on('end', async () => {
    const jsonPok = await getPkemonJson() // recogemos json
    const pokemon = JSON.parse(body) // transformamos en json el body
    const validationPok = await pokemonValidatorStructure(pokemon) // validar el pokemon

    if (validationPok) { // validamos el pokemon
      response400(response, {
        response: 'Ha habido un problema en el pokemon que has mandado',
        pokemonValidation: validationPok
      })
    } else if (await pokemonExist(jsonPok, pokemon.number)) { // comprobar si existe
      response400(response, {
        response: 'El pokemon ya existe',
        pokemon
      })
    } else {
      addPokemon(jsonPok, pokemon)
      savePokemonJson(jsonPok)
        .then(() => {
          response200(response, {
            response: 'Exito en el añadido del objeto.',
            Pokemon: pokemon
          })
        })
        .catch(() => {
          response500(response, {
            response: 'No se pudo añadir el pokemon',
            Pokemon: pokemon
          })
        })
    }
  })
}
