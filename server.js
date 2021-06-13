const path = require("path");
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection")
const exphbs = require("express-handlebars");
const helpers = require("./utils/helpers");
const session = require("express-session");
const SequlizeStore = require("connect-session-sequelize")(session.Store);

const sesh = {
  secret: "secretsecretsecret",
  cookie: {
    path: "/",
    maxAge: 7 * 24 * 60 * 60 * 1000
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
app.use(express.static(path.join(__dirname, "public")));
app.use(session(sesh))
app.use(routes);

app.engine("handlebars", hbs.engine);
app.set("view engine", "handlebars");

sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}!`);
  })
})