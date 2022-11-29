const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')

const expenseRoutes = require('./routes/expense');
const sequelize = require('./util/database');

const app = express();

app.use(bodyParser.json({ extended: false }));
app.use(cors());

app.use('/expenses', expenseRoutes);

sequelize.sync()
    .then(result => {
        app.listen(3000);
    })
    .catch(err => console.log(err));