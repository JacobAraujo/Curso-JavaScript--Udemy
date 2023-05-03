const fs = require('fs').promisses;

module.exports = (caminho) => fs.readFiles(caminho, 'utf8')