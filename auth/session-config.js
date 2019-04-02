const session = require('express-session');
const KnexSessionStore = require('connect-session-knex')(session);
const configuredKnex = require('../database/dbConfig');

const sessionConfig = {
    name: 'monster', // defaults to sid
    secret: 'keep it secret, keep it safe!',
    cookie: {
      maxAge: 1000 * 60 * 10, // milliseconds
      secure: false, // use cookie over https
      httpOnly: true, // false means JS can access the cookie on the client
    },
    resave: false, // avoid recreating unchanged sessions
    saveUninitialized: false, // GDPR compliance
    store: newSessionStore({
      knex: configuredKnex,
      tablename: 'sessions',
      sidfieldname: 'sid',
      createtable: true,
      clearInterval: 1000 * 60 * 30,
    }),
  };

  module.exports = server;