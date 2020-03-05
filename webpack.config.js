const autoprefixer = require('autoprefixer');
const pkg = require('./package.json');
const aliases = require('./aliases');

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: [
          'style-loader',
          'css-loader',
          {
            loader: 'postcss-loader',
            options: { plugins: [autoprefixer({ grid: 'autoplace' })] }
          }
        ]
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: { presets: ['@babel/preset-env', '@babel/preset-react'] }
        }
      }
    ]
  },
  // component source
  entry: './index.js',
  // bundle destination
  // commonjs to treat all bundles independently
  output: { filename: pkg.main, library: '', libraryTarget: 'commonjs' },
  resolve: {
    alias: aliases,
    extensions: ['.js', '.jsx', '.json'],
    modules: ['node_modules']
  }
};
