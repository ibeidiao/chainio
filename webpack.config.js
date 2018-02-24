const path = require('path');
const fs = require('fs');

const config = ((env = 'dev') => {
  const config = require(`./webpack.config.${env}`);
  const files = fs.readdirSync('./public/javascripts');;
  const entry = {};
  
  files.forEach(file => {
    const filePath = path.resolve(__dirname, './public/javascripts', file);
    entry[file.substr(0, file.length - 3)] = filePath;
  });

  config.entry = entry;
  return config;
})();

module.exports = config;

// module.exports = {
//   entry: {
//     pageOne: './public/javascripts/pageOne.js', 
//     pageTwo: './public/javascripts/pageTwo.js',
//   },
//   output: {
//     filename: '[name].js',
//     path: path.resolve(__dirname, 'public/entries'),
//   }
// };