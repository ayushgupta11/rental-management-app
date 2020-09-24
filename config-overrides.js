//config-overrides.js
const {
    override,
    addWebpackAlias,
  } = require("customize-cra");

const path = require('path'); 

module.exports = override( 
    addWebpackAlias({
        "@components": path.resolve(__dirname, './src/components'),
        "@constants": path.resolve(__dirname, './src/constants'),
        "@static": path.resolve(__dirname, './src/static')
    })
)