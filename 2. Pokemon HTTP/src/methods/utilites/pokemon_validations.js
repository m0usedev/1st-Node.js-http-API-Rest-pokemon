const { PROPERTIES_POKEMON } = require('../../../dependences.js')

// Saber si existe el pokemon por su numero o id
async function pokemonExist (listPok, idPok) {
  return listPok.filter(obj => obj.number === idPok)[0] !== undefined
}

// Validar si el pokemon es correcto
async function pokemonValidatorStructure (pok) {
  /**
   fail response example
   {
    wrongProperties: ['apellido', 'zona'], // propiedades que no deberian estar - string[]
    missingProperties: [ // propiedades que faltan - object[]
      {
        porpertyName: 'name',
        typeValue: 'string'
      },
      {
        porpertyName: 'number',
        typeValue: 'number'
      }
    ],
    wrongValueType: [ // arrray de objetos, propiedad erronea y lo que se esperaba - object[]
      {
        porpertyName: 'type',
        typeValueReceived: 'number',
        typeValueExpected: 'string[]'
      }
    ]
  }
   */
  return Promise.all([
    wrongProperties(pok),
    missingProperties(pok),
    wrongValueType(pok)
  ]).then(([wrongProperties, missingProperties, wrongValueType]) => {
    const validation = {}
    if (wrongProperties) validation.wrongProperties = wrongProperties
    if (missingProperties) validation.missingProperties = missingProperties
    if (wrongValueType) validation.wrongValueType = wrongValueType
    return Object.keys(validation).length > 0 ? validation : null
  })
}

async function wrongProperties (pokemon) {
  /**
   * wrongProperties: ['apellido', 'zona'], // propiedades que no deberian estar - string[]
   */
  const wrongProperties = []
  for (const key in pokemon) {
    const propertys = ['number', 'name', 'type', 'description']
    if (!propertys.includes(key)) wrongProperties.push(key)
  }
  if (wrongProperties.length > 0) return wrongProperties
}

async function missingProperties (pokemon) {
  /**
   * missingProperties: [ // propiedades que faltan - object[]
      {porpertyName: 'name',
        typeValue: 'string'}...
    ],
   */
  const missingProperties = []
  PROPERTIES_POKEMON.forEach((obj) => {
    for (const key in obj) {
      if (!(key in pokemon)) missingProperties.push({ porpertyName: key, typeValue: obj[key] })
    }
  })
  if (missingProperties.length > 0) return missingProperties
}

async function wrongValueType (pokemon) {
  /**
   * wrongValueType: [ // arrray de objetos, propiedad erronea y lo que se esperaba - object[]
      {porpertyName: 'type',
        typeValueReceived: 'number',
        typeValueExpected: 'string[]'}...
    ]
   */
  const wrongValueType = []
  PROPERTIES_POKEMON.forEach((obj) => {
    for (const key in obj) {
      const typeOf = typeof pokemon[key]
      if (key !== 'type' && (key in pokemon) && !(typeOf === obj[key])) {
        wrongValueType.push({
          porpertyName: key,
          typeValueReceived: typeof pokemon[key],
          valueTypeExpected: obj[key]
        })
      } else if ((key === 'type' && 'type' in pokemon) && (!Array.isArray(pokemon.type) || !(pokemon.type.every(e => typeof e === 'string')))) {
        let typeValueReceived = ''

        if (Array.isArray(pokemon.type)) {
          typeValueReceived = [...new Set(pokemon.type.map(e => typeof e))].join('/') + '[]'
        } else {
          typeValueReceived = typeof pokemon.type
        }

        wrongValueType.push({ porpertyName: 'type', typeValueReceived, typeValueExpected: 'string[]' })
      }
    }
  })
  if (wrongValueType.length > 0) return wrongValueType
}

module.exports = {
  pokemonExist,
  pokemonValidatorStructure,
  wrongProperties,
  missingProperties,
  wrongValueType
}
