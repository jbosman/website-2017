'use strict';

const express = require('express');
const app = express();

const path = require('path');

const ROOT = path.join(__dirname, '../');
const IndexHTML = path.join(ROOT, 'browser/index.html');
const PUBLIC = path.join(ROOT, 'public');

app.use(express.static(PUBLIC));

app.get('/', (req, res) => { res.sendFile(IndexHTML) });

app.listen( '3000', () => { console.log('Listening on port 3000!'); })