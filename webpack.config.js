const path = require('path');
const nodeExternals = require('webpack-node-externals');


module.exports = {
    mode: 'development',
    context: __dirname + '/src',
    entry: {
        app: '../index.js',
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ],
    },
    target: 'node',
    externalsPresets: {
        node: true,
    },
    externals: [nodeExternals()],
};