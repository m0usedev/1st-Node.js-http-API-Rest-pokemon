const fs = require('node:fs/promises')

const { POKEMON_PATH } = require('../../utilites/globales.js')

// para recuperar el json de pokemons
async function getPkemonJson () {
  return new Promise((resolve, reject) => {
    try {
      fs.readFile(POKEMON_PATH, { encoding: 'utf8' })
        .then(data => resolve(JSON.parse(data)))
        .catch((err) => {
          console.error(`Error: ${err}`)
          reject(err)
        })
    } catch (error) {
      console.log(`Problemas con el fichero. Error: ${error}`)
    }
  })
}

async function savePokemonJson (pokemonJson) {
  return new Promise((resolve, reject) => {
    try {
      fs.writeFile(POKEMON_PATH, JSON.stringify(pokemonJson, null, 2))
        .then(() => resolve(null))
        .catch((err) => reject(err))
    } catch (error) {
      console.log(`Problemas con el fichero. Error: ${error}`)
    }
  })
}

module.exports = {
  getPkemonJson,
  savePokemonJson
}
