// generatePaths.js
const fs = require('fs')
const path = require('path')

function generatePaths (dir, result = {}, baseDir = dir) {
  const files = fs.readdirSync(dir)

  files.forEach((file) => {
    const filePath = path.join(dir, file)
    const stat = fs.statSync(filePath)

    if (stat.isDirectory()) {
      generatePaths(filePath, result, baseDir) // Recurre en subdirectorios
    } else {
      // const relativePath = path.relative(baseDir, filePath)
      const key = path.basename(file, path.extname(file)) // Nombre del archivo sin extensión
      result[key] = path.resolve(filePath) // Guarda la ruta absoluta
    }
  })

  return result
}

const PATHS = generatePaths(path.join(__dirname, 'src'))

// Guarda el objeto en paths.json
// fs.writeFileSync(path.join(__dirname, 'paths.json'), JSON.stringify(paths, null, 2), 'utf-8')
console.log('Mapa de rutas generado en paths.json')

module.exports = { PATHS }
