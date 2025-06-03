require('dotenv').config();
const path = require('node:path');
const express = require('express');
const indexRouter = require('./routes/indexRouter');

const app = express();
const assetsPath = path.join(__dirname, 'public');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(assetsPath));

app.use('/', indexRouter);

const PORT = process.env.PORT || 3000
app.listen(PORT)