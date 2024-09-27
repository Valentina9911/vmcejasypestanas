const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// Aumentar el límite a 100 MB
app.use(bodyParser.json({ limit: '100mb' }));
app.use(bodyParser.urlencoded({ limit: '100mb', extended: true }));
