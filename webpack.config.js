module.exports = {
  
  //specify the input
  entry: './app/app.jsx',
  
  //specify the output
  output: {
    //set two properties on the object
    path: __dirname,
    filename:  './public/bundle.js'
  },
  
  resolve: {
    root: __dirname,
    alias: {
    },
    extensions: ['', '.js', '.jsx']
  },
  
  module: {
    loaders:[
      {
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015', 'stage-3']
        },
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/
      }
    ]
  }
};