// Webpack is the module bundler [ JS,css,images files are treated as modules ]

var path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

// Here you are exporting the config required for webpack 
module.exports = {
    /* Note:
   "@babel/preset-env" in the package.json file in devDependencies will allow us to use class syntax. 
    It transforms class into normal constructor functions which older browser can use. 
    "@babel/preset-react" will do the jsx transformation. 
    Instead of bundling all of your code and outputting it to dist folder. webpack dev server is going to that in its local cache 
    "babel": {
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ]
  },The above one can be in package.json or you can have .babelrc file*/

    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.(js)$/,
                exclude: /node_modules/,
                use: 'babel-loader'
            },
            /* Find all the js files by running the regex and run babel-loader 
               on all of them to transform it to browser understandable code. */
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            /* Find css files and run style-loader on them and then run css-loader on them. 
               css-loader will just change url('../background.png') to just require('../background') syntax.
               style-loader will see the require(css) statement and insert it on to that page. so that 
               these styles are active before that component renders.
               "plugins": ["@babel/plugin-proposal-class-properties"] is for sayhi = ()=>"hi" to work...class properties to work*/
            {
                test: /\.(png|jpe?g|gif)$/i,
                use: [
                    {
                        loader: 'file-loader',
                    },
                ],
            },
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'www/index.html',
          //  jsExtension: '.gz'
        }),
        // new CompressionPlugin({
        //     filename: '[path].gz[query]',
        //     algorithm: 'gzip',
        //     test: /\.js$|\.css$|\.html$|\.eot?.+$|\.ttf?.+$|\.woff?.+$|\.svg?.+$/,
        //     threshold: 10240,
        //     minRatio: 0.8
        //   }),
        //  new HtmlWebpackChangeAssetsExtensionPlugin()
    ]
}