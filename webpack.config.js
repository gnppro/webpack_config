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
        use: MiniCssExtractPlugin.loader({
          fallback: "style-loader",
          use: ["css-loader", "sass-loader"]
        })
      }
    ]
  },
  plugins: [
    new MiniCssExtractPlugin({
        filename: "css/[name].css"
    })
  ]
}