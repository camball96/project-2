const path = require('path');
const express = require('express');
const routes = require('./controllers');
const sequelize = require('./config/connection')
const mysql = require('mysql2')
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const session = require("express-session");
const SequlizeStore = require("connect-session-sequelize")(session.Store);

// session
const sesh = {
  secret: "unhashedsecret",
  cookie: { maxAge: 600 },
  resave: false,
  saveUninitialized: true,
  store: new SequlizeStore({
    db: sequelize,
  }),
};


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sesh))
app.use(routes);

// sync sequelize models to the database, then turn on the server
// updated

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
})
