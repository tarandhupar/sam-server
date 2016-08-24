var webpack = require('webpack');
var path = require('path');
var CopyWebpackPlugin = require('copy-webpack-plugin');

var commonConfig = {
  resolve: {
    extensions: ['', '.ts', '.js', '.json']
  },
  module: {
    loaders: [
      // TypeScript
      { test: /\.ts$/, loaders: ['ts-loader', 'angular2-template-loader'] },
      { test: /\.html$/, loader: 'raw-loader' },
      { test: /\.css$/, loader: 'raw-loader' },
      { test: /\.json$/, loader: 'raw-loader' }
    ],
  },
  plugins: [
    new CopyWebpackPlugin([
        { from: 'node_modules/samwds/dist/fonts', to: 'fonts' },
        { from: 'src/assets', to: 'assets/img' },
        { from: 'src/img', to: 'img' },
        { from: 'src/js', to: 'js' }
      ])
  ]

};


var clientConfig = {
  target: 'web',
  entry: './src/client',
  output: {
    path: root('dist/client')
  },
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: false
  }
};


var serverConfig = {
  target: 'node',
  entry: './src/server', // use the entry file of the node server if everything is ts rather than es5
  output: {
    path: root('dist/server'),
    libraryTarget: 'commonjs2'
  },
  externals: checkNodeImport,
  node: {
    global: true,
    __dirname: true,
    __filename: true,
    process: true,
    Buffer: true
  }
};



// Default config
var defaultConfig = {
  context: __dirname,
  resolve: {
    root: root('/src')
  },
  output: {
    publicPath: path.resolve(__dirname),
    filename: 'index.js'
  }
}





// Helpers
function checkNodeImport(context, request, cb) {
  if (!path.isAbsolute(request) && request.charAt(0) !== '.') {
    cb(null, 'commonjs ' + request); return;
  }
  cb();
}

function root(args) {
  args = Array.prototype.slice.call(arguments, 0);
  return path.join.apply(path, [__dirname].concat(args));
}

var LOADERS = [{
  test: /\.ts$/,
  loader: 'ts',
  query: {
    ignoreDiagnostics: [
      2403, // 2403 -> Subsequent variable declarations
      2300, // 2300 -> Duplicate identifier
      2374, // 2374 -> Duplicate number index signature
      2375, // 2375 -> Duplicate string index signature
    ]
  },
  exclude: [
    /node_modules/
  ]
}, {
  test: /\.html$/,
  loader: 'raw'
}, {
  test: /\.css$/,
  loaders: ['raw', 'postcss']
}, {
  test: /\.json$/,
  loader: 'json'
}];

var TESTING_CONFIG = {
  resolve: {
    extensions: ['', '.ts', '.js']
  },
  module: {
    loaders: LOADERS
  },
  devServer: {
    quiet: true,
    noInfo: true,
  }
};

var webpackMerge = require('webpack-merge');

exports = module.exports = [
  // Client
  webpackMerge({}, defaultConfig, commonConfig, clientConfig),

  // Server
  webpackMerge({}, defaultConfig, commonConfig, serverConfig)
];
exports.TESTING_CONFIG    = TESTING_CONFIG;

