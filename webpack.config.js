//entry point of the application
const path = require('path') 

module.exports = {
    entry: './src/playground/redux_expensify.js',
    output: {
        path: path.join(__dirname, 'public'), //absolute path on your machine to where you wanna output the output file
        filename: 'bundle.js'
    },
    module:{
        rules:[{
            loader: 'babel-loader',
            test: /\.js$/,
            exclude: /node_modules/
        }, {
            test: /\.s?css$/,
            use: [
                'style-loader',
                'css-loader',
                'sass-loader'
            ]
        }]
    },
    devtool: 'cheap-module-eval-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
        historyApiFallback:true
    }
};