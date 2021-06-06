const path = require('path');
const express = require('express');
const controllers = require('./controllers');
const sequelize = require('./config/connection')
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');
const session = require("express-session");
const SequlizeStore = require("connect-session-sequelize")(session.Store);

// session
const sesh = {
  secret: "secretsecretsecret",
  cookie: {
    path: '/',
  },
  resave: false,
  saveUninitialized: true,
  store: new SequlizeStore({
    db: sequelize,
  }),
};


const app = express();
const PORT = process.env.PORT || 3001;

const hbs = exphbs.create({ helpers });

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(sesh))
app.use(controllers);

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

// sync sequelize models to the database, then turn on the server
// updated

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
})