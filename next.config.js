const path = require('path')
const glob = require('glob')
const withSASS = require('@zeit/next-sass')

module.exports = withSASS({
  cssModules: true,
  cssLoaderOptions: {
    importLoaders: 1,
    localIdentName: '[local]',
    includePaths: ['styles', 'node_modules', './components/*/*.sass']
  },
  
  distDir: 'public',

  exportPathMap: function () {
    return {
      "/": { page: "/" },
      "/about": { page: "/about" },
    }
  },

  webpack: (config, { dev }) => {
    // config.module.rules.push(
    //   {
    //     test: /\.(css|sass)/,
    //     loader: 'emit-file-loader',
    //     options: {
    //       name: 'dist/[path][name].[ext]'
    //     }
    //   }
    //   ,
    //   {
    //     test: /\.css$/,
    //     use: ['babel-loader', 'raw-loader', 'postcss-loader']
    //   }
    //   ,
    //   {
    //     test: /\.s(a|c)ss$/,
    //     use: ['babel-loader', 'raw-loader', 'postcss-loader',
    //       {
    //         loader: 'sass-loader',
    //         options: {
    //           includePaths: ['styles', 'node_modules']
    //             .map((d) => path.join(__dirname, d))
    //             .map((g) => glob.sync(g))
    //             .reduce((a, c) => a.concat(c), [])
    //         }
    //       }
    //     ]
    //   }
    // )
    return config
  }
})

