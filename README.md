# API IDUKAY

## Rutas disponibles

La api será accesible a travez de la ruta:

    localhost:3000

El api tiene disponibles los siguientes endpoints

| Endpoint |
| -------- |
| Cats     |
| Dogs     |

Cada endpoint es accesible de la siguiente manera

    localhost:3000/<endpoint>

Cada colección de mongodb tiene disponible su crud en donde las rutas son:

    * Obtener todos: GET loclahost:3000/<endpoint>

    * Obtener por id: GET localhost:3000/<endpoint>/<id>

    * Eliminar por id: DELETE localhost:3000/<endpoint><id>

    * Crear nuevo registro: POST localhost/<endpoint>

## Antes de iniciar

Antes de iniciar a correr la api se deben de instalar los paquetes requeridos con:

```
   $ npm install
```

## Correr el proyecto

Para poder corre el proyecto se debe de correr el siguiente comando:

```
    $ npm run dev
```
