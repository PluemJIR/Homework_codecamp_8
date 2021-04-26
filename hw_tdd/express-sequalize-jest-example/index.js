const express = require('express')
const app = express();
var bodyParser = require('body-parser');
const registerController = require('./controller/register')();
const db = require('./models')
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies
app.set('view engine', 'ejs');

app.get('/', async (req, res, next) => {
    res.render('register');
});

app.post('/register_completed', registerController.registerCompleted);

async function main() {
    await db.sequelize.sync();
    app.listen(3000);
}
main();