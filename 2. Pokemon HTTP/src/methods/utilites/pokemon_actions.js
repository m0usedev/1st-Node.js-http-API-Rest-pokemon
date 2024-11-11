// Esta funcion elimina el pokenon de la lista y devuelve el pokemon eliminado
function deletePokemon (listPoks, idPok) {
  const pok = listPoks.filter((obj, index) => {
    if (obj.number === idPok) {
      listPoks.splice(index, 1)
      return true
    }
    return false
  })[0]
  return pok
}

function addPokemon (listPoks, pokemon) {
  listPoks.push(pokemon)
}

function modifyPokemon (listPoks, newPokData, idPokModify) {
  let pokAfterModify = {}
  const listPoksAfterModify = listPoks.map((pokemon) => { // modificamos la lista de pokemons
    if (pokemon.number === idPokModify) {
      for (const key in newPokData) {
        pokemon[key] = newPokData[key]
      }
      pokAfterModify = pokemon
    }
    return pokemon
  })
  return { pokAfterModify, listPoksAfterModify } // devolvemos el pokemon con sus modificaciones y la lista con el pokemon modificado
}

module.exports = {
  deletePokemon,
  addPokemon,
  modifyPokemon
}
