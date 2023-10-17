const express = require("express");
const db = require('./db');
const cors = require("cors");
const bodyParser = require('body-parser');
const logger = require('morgan');
const bankController = require('./controllers/bankController');

const PORT = process.env.PORT || 3001;

const app = express();

//middleware
app.use(cors());
app.use(express.json());
app.use(logger('dev'));
//app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => res.send({ msg: "This is root!" }));
//app.get("/users", bankController.getAllUsers);//get all users
//app.post('/users', bankController.createUser);//create a new user
app.get("/accounts", bankController.getAllAccounts);//get all accounts
app.post('/accounts', bankController.createBankAccount);//create a new account
app.get("/account", (req, res) => res.send("This is account"));//get all accounts
//app.get("/history", bankController.getAllHistory);//get all histories
//app.post('/history', bankController.createHistory);//create a new history

app.listen(PORT, () => console.log(`Express server listening on port ${PORT}`));