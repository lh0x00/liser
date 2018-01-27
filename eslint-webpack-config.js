const path = require('path')

module.exports = {
  resolve: {
    modules: [
      path.join(`${__dirname}/`, './src'),
      path.join(`${__dirname}/`, './scripts'),
      path.join(`${__dirname}/`, './node_modules'),
    ],
  },
}

