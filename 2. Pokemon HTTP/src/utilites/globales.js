const path = require('node:path')

const POKEMON_PATH = path.join(__dirname, '..', 'json', 'pokemon.json')
console.log(POKEMON_PATH)

const PRUEBA_JSON = [
  {
    number: 1,
    name: 'Pikachu',
    type: [
      'Eléctrico'
    ],
    description: 'Es el Pokémon ratón, conocido por sus habilidades eléctricas.'
  },
  {
    number: 2,
    name: 'Charmander',
    type: [
      'Fuego'
    ],
    description: 'Es el Pokémon lagarto con una cola en llamas.'
  }]

const PROPERTIES_POKEMON = [
  { number: 'number' },
  { name: 'string' },
  { type: 'string[]' },
  { description: 'string' }
]

module.exports = {
  POKEMON_PATH,
  PRUEBA_JSON,
  PROPERTIES_POKEMON
}
