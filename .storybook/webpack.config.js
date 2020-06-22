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
      // {
      //   test: /\.css$/,
      //   use: ['style-loader', 'css-loader']
      // }
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

      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ['style-loader', 'css-loader'],
      },
      // {
      //   test: /\.(js|jsx)$/,
      //   exclude: /node_modules/,
      //   use: {
      //     loader: 'babel-loader',
      //     options: {
      //       presets: ['@babel/preset-env', '@babel/preset-react'],
      //       plugins: [
      //         [
      //           'babel-plugin-styled-components',
      //           {
      //             ssr: true,
      //             displayName: true,
      //             preprocess: false,
      //             minify: true,
      //             pure: true,
      //             transpileTemplateLiterals: true,
      //           },
      //         ],
      //       ],
      //     },
      //   },
      // },
      {
        test: /\.(svg|ico|jpe?g|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani)(\?.*)?$/,

        // test: /\.(png|jpe?g|svg|gif)$/,
        exclude: /node_modules/,
        use: [{ loader: 'file-loader' }],
      },
    ],
  },
};
