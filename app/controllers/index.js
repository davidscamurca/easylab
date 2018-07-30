
const fs1 = require('fs');
const path1 = require('path');

module.exports = app => {
    fs1
        .readdirSync(__dirname)
        .filter(file => ((file.indexOf('.')) !== 0 && (file !== "index.js")))
        .forEach(file => require(path1.resolve(__dirname, file))(app));    
};