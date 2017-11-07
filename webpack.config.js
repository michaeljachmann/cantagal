const webpack = require('webpack');
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'cantagal.js',
    path: path.resolve(__dirname, 'js')
  },
  devServer: {
    contentBase: path.join(__dirname, "./"),
    port: 7000
  },
  module: {
    rules: [
      {
        test: /\.(scss)$/,
        use: [{
          loader: 'style-loader', // inject CSS to page
        }, {
          loader: 'css-loader', // translates CSS into CommonJS modules
        }, {
          loader: 'postcss-loader', // Run post css actions
          options: {
            plugins: function () { // post css plugins, can be exported to postcss.config.js
              return [
                require('precss'),
                require('autoprefixer')
              ];
            }
          }
        }, {
          loader: 'sass-loader' // compiles SASS to CSS
        }]
      }
    ]
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
      Popper: ['popper.js', 'default']
      // In case you imported plugins individually, you must also require them here:
      //Util: "exports-loader?Util!bootstrap/js/dist/util",
      //Dropdown: "exports-loader?Dropdown!bootstrap/js/dist/dropdown"
    })
  ]
};
