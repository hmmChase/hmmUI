// const fs = require('fs');
// const path = require('path');
// const lessToJs = require('less-vars-to-js');

// const themeVars = lessToJs(
//   fs.readFileSync(
//     path.resolve(__dirname, '../src/styles/antd-custom.less'),
//     'utf8'
//   )
// );

module.exports = {
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader']
      }
      // {
      //   test: /\.less$/,
      //   use: [
      //     { loader: 'style-loader' },
      //     {
      //       loader: 'css-loader' // translates CSS into CommonJS
      //     },
      //     {
      //       loader: 'less-loader', // compiles Less to CSS
      //       options: { modifyVars: themeVars, javascriptEnabled: true }
      //     }
      //   ]
      //   // include: [
      //   //   path.resolve(__dirname, '../src'),
      //   //   /[\/]node_modules[\/].*antd/
      //   // ]
      // }
    ]
  }
};
