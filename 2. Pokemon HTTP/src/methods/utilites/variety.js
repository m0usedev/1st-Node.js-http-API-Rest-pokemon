function spliteUrl (url) {
  return url.split('/').slice(1) // separo todas las partes de la url, el primero es un ' ' por lo que me quedo desde el 1
}

module.exports = {
  spliteUrl
}
