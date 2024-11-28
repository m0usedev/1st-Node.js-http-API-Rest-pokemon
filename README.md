<h1 align="center" id="title">API-Pokemon-Express-Node-TS</h1>

Proyecto desarrollado en NodeJS para gestionar un json con pokemons y datos sobre estos.

## 📖 Comentarios del desarrollo:

Desde que terminé el grado en Desarrollo de Aplicaciones Web, he estado en una búsqueda constante para decidir qué lenguaje Back-End me gustaría especializarme, aquel que considere más práctico y que tenga mayor sentido para mí. Todos los lenguajes Back-End que conozco me resultan interesantes y espero trabajar con ellos en algún momento. Sin embargo, descubrir Node.js de primera mano a través de este proyecto cambió mi perspectiva. Tanto su historia como su enfoque me han conquistado por completo, tanto a nivel profesional como personal.

La competencia en el mundo de la programación, como en cualquier otra industria, es sumamente beneficiosa. Sin embargo, considero que cada desarrollador debe buscar aquello que le permita trabajar de manera más simple y eficiente, o tecnologías que se integren de forma natural y armoniosa. En el caso de Node.js, creo que cumple a la perfección con el primer principio: fue creado precisamente para simplificar el desarrollo. Es por esta razón que siento que trabajar con Node.js es el camino correcto para mí.

Ya contaba con conocimientos sólidos sobre prácticas y convenciones en el desarrollo Back-End, como gestión de ficheros, creación de API REST, manejo de rutas, entre otros. Pero por primera vez no tuve que aprender un nuevo lenguaje o adaptarme a uno diferente. Ya sabía JavaScript y TypeScript, así que solo tuve que aplicarlos de la misma manera que siempre lo había hecho, pero ahora con herramientas que me permiten construir Back-End de forma eficiente.

Node.js representa para mí un ejemplo claro del concepto de "singularidad" que mencioné al principio: un único lenguaje que permite desarrollar tanto en Front-End como en Back-End, de forma práctica y efectiva. Aunque, es cierto que con el tiempo algunas cosas se han vuelto un poco más complejas, como la integración con TypeScript, integracion que me facilite a mi mismo haciendome mi propia plantilla para hacer mis proyectos de NodeJS con TS, cuyo repositorio se puede encontrar en [Plantilla-Node-TypeScript](https://github.com/m0usedev/Plantilla-Node-TypeScript). Sin embargo, estas dificultades son reconocidas por sus creadores y han motivado desarrollos como Deno, aunque eso es tema para otra conversación.

En este proyecto no encontré grandes dificultades durante el desarrollo, por varias razones. En primer lugar, ya sabía lo que necesitaba hacer; solo debía aprender cómo implementarlo en Node.js. En segundo lugar, la API que desarrollé es una que ya había creado previamente, lo que la convierte en una herramienta ideal para practicar y experimentar. Finalmente, lo más importante: ya conocía JavaScript, lo que me permitió avanzar rápidamente desde el primer momento.

Este proyecto me ayudó a definir la tecnología con la que quiero especializarme en el Back-End, y me siento entusiasmado por continuar trabajando con Node.js en futuros desarrollos.

La primera carpeta `1. Primer contacto http` es solo eso, un primer contacto muy simple con NodeJs.

La segunda carpeta `2. Pokemon HTTP` es la api como tal de Pokemon. Por mencionar algun reto interesante del desarrollo puedo mencionar las funciones de validación de las propiedades y valores enviadas por el body en las peticiones. Validadores que se encuentra en el archivo `pokemon_validation.js`.

## 🛠️ Pasos de instalación:

1. Descargar el repositorio de **GitHub**.

2. Instala **Node.js** desde su pagina en la versión **LTS**: **nodejs.org**

3. Abrir el proyecto en **VS Code**.

4. Abrir el terminar y ejecutar:

```
npm install
```

5. Después ejecutar el comando: 

```
node '.\2. Pokemon HTTP\index_api.js'
```

6. Abre el enlace que se te genera y prueba el proyecto ;)

```
Local:   http://localhost:1234/
```

7. Estas son las distintas operaciones que puedes hacer y sus paths:
   - Get all Pokemon: Recuperar toda la lista de Pokemons.
     - Path: `/pokemon`
   - Post one Pokemon: Agregar un pokemon a la lista.
     - Path: `/add-pokemon`
     - Body:
         ```json
         {
           "number": number,
           "name": string,
           "type": string[],
           "description": string
         }
         ```
         Ejemplo:
         ```json
         {
           "number": 11,
           "name": "Pikachu",
           "type": [
           "Eléctrico"
           ],
           "description": "Este inteligente Pokémon tuesta las duras bayas con electricidad para hacerlas más comestibles."
         }
         ```
   - Put one Pokemon:
     - Path: `//modify-pokemon/:number` -> `/modify-pokemon/11`
     - Body:
         ```json
         {
           "number": number,
           "name": string,
           "type": string[],
           "description": string
         }
         ```
         Ejemplo:
         ```json
         {
           "description": "Levanta su cola para vigilar los alrededores. A veces, puede ser alcanzado por un rayo en esa pose."
         }
         ```
   - Delete one Pokemon:
     - Path: `/delete/:number` -> `//delete/11`
  
## 💻 Desarrollado con:

- NodeJS
