const webpack = require('webpack');
const path = require('path');
const config = require('./webpack.config'); 
 
let app = new (require('express'))();

let port = 9000;

let compiler = webpack(config);

app.get('/', (req, res) => res.sendFile(path.resolve(__dirname, '/index.html')));

app.listen(port);