# Simple Crud
A simple crud app with React Hooks (+Axios) consuming a simple Nodejs api server (+Sequelize Sqlite).

## Screenshot
![alt text](https://github.com/arturguitelar/simple-crud-react-nodejs/blob/master/simple-crud-app-screenshot-frontend.png)

## frontend

| dependencies | links |
| ------ | ----- |
| axios | [link](https://github.com/axios/axios#readme) |
| querystring | [link](https://github.com/sindresorhus/query-string#readme) |
| react | [link](https://reactjs.org/) |
| react-dom | [link](https://reactjs.org/docs/react-dom.html) |
| react-scripts | [link](https://github.com/facebook/create-react-app#readme) |

CSS Style - (html tags on index.html): [Materialize](https://materializecss.com/)

### `npm start`
Start react app.
Port: http://localhost:3000

<br>

## backend

| dependencies | links |
| ------ | ----- |
| cors | [link](https://github.com/expressjs/cors#readme) |
| express | [link](https://expressjs.com/) |
| sequelize | [link](https://sequelize.org/) |
| sqlite3 | [link](https://github.com/mapbox/node-sqlite3) |

| dev-dependencies | links |
| ------ | ----- |
| nodemon | [link](https://nodemon.io/) |
| sequelize-cli | [link](https://github.com/sequelize/cli#readme) |

### `npm start`
Start api server.
Port: http://localhost:3333

<br>

Database in: database/database.sqlite

The database.sqlite already contains some data.

### Api routes:

| verb | route |
| ------ | ------ |
| get | /api |
| post | /api |
| put | /api/:id |
| delete | /api/:id |

### Tutorial referencies:

[Build a CRUD App in React with Hooks - Tania Rascia](https://www.taniarascia.com/crud-app-in-react-with-hooks/) - eng.

[Configurando o ORM Sequelize no NodeJS com ExpressJS - Rocketseat](https://blog.rocketseat.com.br/nodejs-express-sequelize/) - pt-br.

[Post on my blog about this project.](https://arturkilldragon.wordpress.com/2019/08/25/crud-simples-com-react-consumindo-api-em-nodejs/) - pt-br

