const path = require('path'); // Para importan los modulos, con rutas relativas path.resolve(__dirname,
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, 'src/js/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'js/bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
            MiniCssExtractPlugin.loader, 
            "css-loader"
          ]
        // use: [
        //   { loader: "style-loader" }, // Agrega el css al DOM en un <style>
        //   { loader: "css-loader" }, // Interpreta los archivos css en js via import
        // ]
        //
        //use: ExtractTextPlugin.extract({
        //    fallback: "style-loader",
        //    use: "css-loader"
        //  })
      },
      {
        test: /\.scss$/,
        use: [
          MiniCssExtractPlugin.loader, 
          "css-loader",
          "sass-loader"
        ]
        //use: MiniCssExtractPlugin.loader({
        //  fallback: "style-loader",
        //  use: ["css-loader", "sass-loader"]
        //})
      },
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['babel-preset-env']
          }
        }
      },
      {
        test: /\.(png|jpg|gif|woff|eot|ttf|svg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 100000
            }
          }
        ]
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "css/[name].css"
    })
  ]
}