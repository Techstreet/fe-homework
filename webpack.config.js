const path = require('path'); // node core

module.exports = {
    context: path.resolve(__dirname, './app'),

    entry: {
        javascript: "./js/app.js",
        html: "./index.html",
    },

    output: {
        filename: "app.js",
        path: __dirname + "/dist",
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.json'],
        root: path.resolve(__dirname, './app/js'),
    },

    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: ["react-hot", "babel-loader"],
            },
            {
                test: /\.html$/,
                loader: "file?name=[name].[ext]",
            },
        ],
    },
    devtool: 'cheap-module-eval-source-map'
}
