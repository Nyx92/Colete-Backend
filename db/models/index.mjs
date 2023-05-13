import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

import initUserModel from './user.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  // same as const DATABASE_URL = process.env.DATABASE_URL
  const { DATABASE_URL } = process.env;
  // The url.parse() method takes a URL string as its argument and returns an object with various properties that represent the different parts of the URL. 
  const dbUrl = url.parse(DATABASE_URL);
  // e.g., postgres://myuser:mypassword@mydbhost:5432/mydatabase
  // The .auth property is a string that contains the username and password for the authentication in the format of username:password. 
  // The code dbUrl.auth.substr(0, dbUrl.auth.indexOf(':')) extracts the username from the authentication string
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));  // 'myuser'
  // while dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length) extracts the password
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length); // 'mypassword'
  const dbName = dbUrl.path.slice(1); // 'mydatabase'
  const host = dbUrl.hostname; // mydbhost
  const { port } = dbUrl; // 5432

  // setting the host: process.env.POSTGRES_HOST, in sequelize.config.cjs to be e.g., mydbhost from dbUrl
  // so process.env.POSTGRES_HOST = mydbhost
  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  // if development then use config's data
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.User = initUserModel(sequelize, Sequelize.DataTypes);


db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
