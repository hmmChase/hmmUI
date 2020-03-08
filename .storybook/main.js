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
  presets: [
    {
      name: 'storybook-addon-deps/preset',
      options: { exclude: /^@babel/ }
    }
  ],

  stories: [
    '../libraries/**/**/*.stories.js',
    '../libraries/**/**/*.stories.mdx',
    '../components/**/**/**/*.stories.js',
    '../components/**/**/**/*.stories.mdx'
  ],

  addons: [
    // '@storybook/addon-a11y',
    // '@storybook/addon-actions',
    // '@storybook/addon-backgrounds',
    '@storybook/addon-docs',
    '@storybook/addon-knobs'
    // '@storybook/addon-links',
    // '@storybook/addon-storysource',
    // '@storybook/addon-viewport'
    // 'storybook-addon-responsive-views'
  ]

  // webpackFinal: (config, options) => {
  //   config.module.rules.push({
  //     loader: 'babel-loader',
  //     exclude: /node_modules/,
  //     test: /\.(js|jsx)$/,
  //     options: {
  //       presets: ['@babel/react'],
  //       plugins: [
  //         [
  //           'import',
  //           {
  //             libraryName: 'antd',
  //             //  libraryDirectory: 'es',
  //             style: true
  //           }
  //         ]
  //       ]
  //     }
  //   });

  //   config.module.rules.push({
  //     test: /\.less$/,
  //     use: [
  //       { loader: 'style-loader' },
  //       { loader: 'css-loader' },
  //       {
  //         loader: 'less-loader',
  //         options: { javascriptEnabled: true, modifyVars: themeVars }
  //       }
  //     ]
  //     // include: [path.resolve(__dirname, '../src'), /[\/]node_modules[\/].*antd/]
  //   });

  //   // console.dir(config, { depth: null });

  //   return config;
  // }
};

// const webpackInfo = {
//   mode: 'development',
//   module: {
//     rules: [
//       {
//         test: /\.(mjs|jsx?)$/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               cacheDirectory:
//                 'C:\\_Code\\Projects\\storybook\\node_modules\\.cache\\storybook',
//               presets: [
//                 'C:\\_Code\\Projects\\storybook\\node_modules\\babel-preset-react-app\\index.js'
//               ],
//               plugins: [
//                 [
//                   'C:\\_Code\\Projects\\storybook\\node_modules\\babel-plugin-named-asset-import\\index.js',
//                   {
//                     loaderMap: {
//                       svg: {
//                         ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
//                       }
//                     }
//                   }
//                 ],
//                 [
//                   'C:\\_Code\\Projects\\storybook\\node_modules\\babel-plugin-react-docgen\\lib\\index.js',
//                   { DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES' }
//                 ]
//               ]
//             }
//           }
//         ],
//         include: ['C:\\_Code\\Projects\\storybook'],
//         exclude: ['C:\\_Code\\Projects\\storybook\\node_modules']
//       },
//       {
//         test: /\.md$/,
//         use: [
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\raw-loader\\dist\\cjs.js'
//           }
//         ]
//       },
//       {
//         test: /\.js$/,
//         include: /node_modules\/acorn-jsx/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               presets: [
//                 [
//                   'C:\\_Code\\Projects\\storybook\\node_modules\\@babel\\preset-env\\lib\\index.js',
//                   { modules: 'commonjs' }
//                 ]
//               ]
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(stories|story).mdx$/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               cacheDirectory:
//                 'C:\\_Code\\Projects\\storybook\\node_modules\\.cache\\storybook',
//               presets: [
//                 'C:\\_Code\\Projects\\storybook\\node_modules\\babel-preset-react-app\\index.js'
//               ],
//               plugins: [
//                 [
//                   'C:\\_Code\\Projects\\storybook\\node_modules\\babel-plugin-named-asset-import\\index.js',
//                   {
//                     loaderMap: {
//                       svg: {
//                         ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
//                       }
//                     }
//                   }
//                 ],
//                 [
//                   'C:\\_Code\\Projects\\storybook\\node_modules\\babel-plugin-react-docgen\\lib\\index.js',
//                   { DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES' }
//                 ]
//               ]
//             }
//           },
//           {
//             loader: '@mdx-js/loader',
//             options: {
//               compilers: [[(Function: compiler)]],
//               remarkPlugins: [[(Function: slug)], [(Function: externalLinks)]]
//             }
//           }
//         ]
//       },
//       {
//         test: /\.mdx$/,
//         exclude: /\.(stories|story).mdx$/,
//         use: [
//           {
//             loader: 'babel-loader',
//             options: {
//               cacheDirectory:
//                 'C:\\_Code\\Projects\\storybook\\node_modules\\.cache\\storybook',
//               presets: [
//                 'C:\\_Code\\Projects\\storybook\\node_modules\\babel-preset-react-app\\index.js'
//               ],
//               plugins: [
//                 [
//                   'C:\\_Code\\Projects\\storybook\\node_modules\\babel-plugin-named-asset-import\\index.js',
//                   {
//                     loaderMap: {
//                       svg: {
//                         ReactComponent: '@svgr/webpack?-prettier,-svgo![path]'
//                       }
//                     }
//                   }
//                 ],
//                 [
//                   'C:\\_Code\\Projects\\storybook\\node_modules\\babel-plugin-react-docgen\\lib\\index.js',
//                   { DOC_GEN_COLLECTION_NAME: 'STORYBOOK_REACT_CLASSES' }
//                 ]
//               ]
//             }
//           },
//           {
//             loader: '@mdx-js/loader',
//             options: {
//               remarkPlugins: [[(Function: slug)], [(Function: externalLinks)]]
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(stories|story)\.[tj]sx?$/,
//         loader:
//           'C:\\_Code\\Projects\\storybook\\node_modules\\@storybook\\source-loader\\dist\\server\\index.js',
//         options: { inspectLocalDependencies: true },
//         enforce: 'pre'
//       },
//       {
//         test: [/\.stories\.(jsx?$|tsx?$)/],
//         enforce: 'pre',
//         use: [
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\@storybook\\source-loader\\dist\\server\\index.js',
//             options: undefined
//           }
//         ]
//       },
//       {
//         test: /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/,
//         loader:
//           'C:\\_Code\\Projects\\storybook\\node_modules\\file-loader\\dist\\cjs.js',
//         query: { name: 'static/media/[name].[hash:8].[ext]' }
//       },
//       {
//         test: /\.(mp4|webm|wav|mp3|m4a|aac|oga)(\?.*)?$/,
//         loader:
//           'C:\\_Code\\Projects\\storybook\\node_modules\\url-loader\\dist\\cjs.js',
//         query: { limit: 10000, name: 'static/media/[name].[hash:8].[ext]' }
//       },
//       {
//         test: /\.css$/,
//         exclude: /\.module\.css$/,
//         use: [
//           'C:\\_Code\\Projects\\storybook\\node_modules\\react-scripts\\node_modules\\style-loader\\index.js',
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\css-loader\\dist\\cjs.js',
//             options: { importLoaders: 1, sourceMap: false }
//           },
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\postcss-loader\\src\\index.js',
//             options: {
//               ident: 'postcss',
//               plugins: [(Function: plugins)],
//               sourceMap: false
//             }
//           }
//         ],
//         sideEffects: true
//       },
//       {
//         test: /\.module\.css$/,
//         use: [
//           'C:\\_Code\\Projects\\storybook\\node_modules\\react-scripts\\node_modules\\style-loader\\index.js',
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\css-loader\\dist\\cjs.js',
//             options: {
//               importLoaders: 1,
//               sourceMap: false,
//               modules: { getLocalIdent: [(Function: getLocalIdent)] }
//             }
//           },
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\postcss-loader\\src\\index.js',
//             options: {
//               ident: 'postcss',
//               plugins: [(Function: plugins)],
//               sourceMap: false
//             }
//           }
//         ]
//       },
//       {
//         test: /\.(scss|sass)$/,
//         exclude: /\.module\.(scss|sass)$/,
//         use: [
//           'C:\\_Code\\Projects\\storybook\\node_modules\\react-scripts\\node_modules\\style-loader\\index.js',
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\css-loader\\dist\\cjs.js',
//             options: { importLoaders: 3, sourceMap: false }
//           },
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\postcss-loader\\src\\index.js',
//             options: {
//               ident: 'postcss',
//               plugins: [(Function: plugins)],
//               sourceMap: false
//             }
//           },
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\resolve-url-loader\\index.js',
//             options: { sourceMap: false }
//           },
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\sass-loader\\dist\\cjs.js',
//             options: { sourceMap: true }
//           }
//         ],
//         sideEffects: true
//       },
//       {
//         test: /\.module\.(scss|sass)$/,
//         use: [
//           'C:\\_Code\\Projects\\storybook\\node_modules\\react-scripts\\node_modules\\style-loader\\index.js',
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\css-loader\\dist\\cjs.js',
//             options: {
//               importLoaders: 3,
//               sourceMap: false,
//               modules: { getLocalIdent: [(Function: getLocalIdent)] }
//             }
//           },
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\postcss-loader\\src\\index.js',
//             options: {
//               ident: 'postcss',
//               plugins: [(Function: plugins)],
//               sourceMap: false
//             }
//           },
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\resolve-url-loader\\index.js',
//             options: { sourceMap: false }
//           },
//           {
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\sass-loader\\dist\\cjs.js',
//             options: { sourceMap: true }
//           }
//         ]
//       },
//       {
//         test: /\.(js|mjs|jsx|ts|tsx)$/,
//         enforce: 'pre',
//         use: [
//           {
//             options: {
//               cache: true,
//               formatter:
//                 'C:\\_Code\\Projects\\storybook\\node_modules\\react-dev-utils\\eslintFormatter.js',
//               eslintPath:
//                 'C:\\_Code\\Projects\\storybook\\node_modules\\eslint\\lib\\api.js',
//               resolvePluginsRelativeTo:
//                 'C:\\_Code\\Projects\\storybook\\node_modules\\react-scripts\\config',
//               ignore: false,
//               baseConfig: {
//                 extends: [
//                   'C:\\_Code\\Projects\\storybook\\node_modules\\eslint-config-react-app\\index.js'
//                 ]
//               },
//               useEslintrc: false
//             },
//             loader:
//               'C:\\_Code\\Projects\\storybook\\node_modules\\eslint-loader\\dist\\cjs.js'
//           }
//         ],
//         include: [
//           'C:\\_Code\\Projects\\storybook\\src',
//           'C:\\_Code\\Projects\\storybook\\.storybook'
//         ]
//       },
//       {
//         test: /\.(js|mjs|jsx|ts|tsx)$/,
//         include: [
//           'C:\\_Code\\Projects\\storybook\\src',
//           'C:\\_Code\\Projects\\storybook\\.storybook'
//         ],
//         loader:
//           'C:\\_Code\\Projects\\storybook\\node_modules\\babel-loader\\lib\\index.js',
//         options: {
//           customize:
//             'C:\\_Code\\Projects\\storybook\\node_modules\\babel-preset-react-app\\webpack-overrides.js',
//           babelrc: false,
//           configFile: false,
//           presets: [
//             'C:\\_Code\\Projects\\storybook\\node_modules\\babel-preset-react-app\\index.js'
//           ],
//           cacheIdentifier:
//             'development:babel-plugin-named-asset-import@0.3.6:babel-preset-react-app@9.1.1:react-dev-utils@10.2.0:react-scripts@3.4.0',
//           plugins: [
//             [
//               'C:\\_Code\\Projects\\storybook\\node_modules\\babel-plugin-named-asset-import\\index.js',
//               {
//                 loaderMap: {
//                   svg: {
//                     ReactComponent: '@svgr/webpack?-svgo,+titleProp,+ref![path]'
//                   }
//                 }
//               }
//             ]
//           ],
//           cacheDirectory: true,
//           cacheCompression: false,
//           compact: false
//         }
//       },
//       {
//         loader: 'babel-loader',
//         exclude: /node_modules/,
//         test: /\.(js|jsx)$/,
//         options: {
//           presets: ['@babel/react'],
//           plugins: [
//             [
//               'import',
//               { libraryName: 'antd', libraryDirectory: 'es', style: true }
//             ]
//           ]
//         }
//       },
//       {
//         test: /\.less$/,
//         use: [
//           { loader: 'style-loader' },
//           { loader: 'css-loader' },
//           {
//             loader: 'less-loader',
//             options: { javascriptEnabled: true, modifyVars: {} }
//           }
//         ]
//       }
//     ]
//   },
//   resolve: {
//     extensions: ['.mjs', '.js', '.jsx', '.json', '.ts', '.tsx'],
//     modules: ['node_modules', 'C:\\_Code\\Projects\\storybook\\node_modules'],
//     alias: {
//       'babel-runtime/core-js/object/assign':
//         'C:\\_Code\\Projects\\storybook\\node_modules\\@storybook\\core\\node_modules\\core-js\\es\\object\\assign.js',
//       react: 'C:\\_Code\\Projects\\storybook\\node_modules\\react',
//       'react-dom': 'C:\\_Code\\Projects\\storybook\\node_modules\\react-dom',
//       'react-native': 'react-native-web'
//     }
//   },
//   optimization: {
//     splitChunks: { chunks: 'all' },
//     runtimeChunk: true,
//     minimizer: [
//       'TerserPlugin',
//       {
//         options: {
//           test: /\.m?js(\?.*)?$/i,
//           chunkFilter: [(Function: chunkFilter)],
//           warningsFilter: [(Function: warningsFilter)],
//           extractComments: true,
//           sourceMap: true,
//           cache: true,
//           cacheKeys: [(Function: cacheKeys)],
//           parallel: true,
//           include: undefined,
//           exclude: undefined,
//           minify: undefined,
//           terserOptions: { mangle: false, keep_fnames: true }
//         }
//       }
//     ]
//   },
//   performance: { hints: false }
// };
