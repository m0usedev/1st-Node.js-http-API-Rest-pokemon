const { deletePokemon, addPokemon, modifyPokemon } = require('./src/methods/utilites/pokemon_actions.js')
const { getPkemonJson, savePokemonJson } = require('./src/methods/utilites/pokemon_json_actions.js')
const { pokemonExist, pokemonValidatorStructure, wrongProperties, missingProperties, wrongValueType } = require('./src/methods/utilites/pokemon_validations.js')
const { response200, response400, response500, urlNotExist } = require('./src/methods/utilites/response.js')
const { spliteUrl } = require('./src/methods/utilites/variety.js')

module.exports = {
  deletePokemon,
  addPokemon,
  modifyPokemon,
  getPkemonJson,
  savePokemonJson,
  pokemonExist,
  pokemonValidatorStructure,
  wrongProperties,
  missingProperties,
  wrongValueType,
  response200,
  response400,
  response500,
  urlNotExist,
  spliteUrl
}
