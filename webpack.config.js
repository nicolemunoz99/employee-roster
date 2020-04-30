const webpack = require('webpack');
const path = require('path');

// reqs for using .env variables
const fs = require('fs');
const dotenv = require('dotenv');
const dotenvExpand = require('dotenv-expand');

module.exports = (env) => {

  // PARSE .ENV VARS
  const currentPath = path.join(__dirname);
  const basePath = currentPath + '/.env';
  const envPath = basePath + '.' + env.ENVIRONMENT;

    // fall back to .env.PRODUCTION
  const finalPath = fs.existsSync(envPath) ? envPath : basePath;

    // set path parameter in the dotenv config
  const fileEnv = dotenvExpand(dotenv.config({ path: finalPath })).parsed;

    // reduce it to a nice object with the variables from the file
  const envKeys = Object.keys(fileEnv).reduce((prev, next) => {
    prev[`process.env.${next}`] = JSON.stringify(fileEnv[next]);
    return prev;
  }, {});

  return {
    entry: './client/src/index.js',
    module: {
      rules: [
        {
          test: /\.(js|jsx)$/,
          exclude: /node_modules/,
          use: ['babel-loader']
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            'css-loader'
          ]
        }
      ]
    },
    plugins: [
      new webpack.DefinePlugin(envKeys) // use .env variables
    ],
    output: {
      path: __dirname + '/client/dist/',
      filename: 'bundle.js'
    },
    devServer: {
      contentBase: path.join(__dirname, 'client/dist'),
      compress: true,
      port: 9000,
      historyApiFallback: true
    }
  };
}