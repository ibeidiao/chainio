const path = require('path');
const fs = require('fs');

const config = ((env = 'dev') => {
  const config = require(`./webpack.config.${env}`);
  const files = fs.readdirSync('./public/src/js');
  const entry = {};
  
  files.forEach(file => {
    const filePath = path.resolve(__dirname, './public/src/js', file);
    var statInfo = fs.statSync(filePath);
    
    if (statInfo.isFile()) {
      entry[file.substr(0, file.length - 3)] = filePath;
    }
  });

  config.entry = entry;
  return config;
});

module.exports = config;
