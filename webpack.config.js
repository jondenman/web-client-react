const path = require('path');
const webpack = require('webpack')

module.exports = {
    entry: {
        app: [path.resolve(__dirname, './index.js')],

    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].bundle.js'
    },
    module: {
        rules: [
            {
                test: /\.html$/,
                use: {
                    loader: 'html-loader',
                    options: {
                        attrs: [':data-src']
                    }
                }
            },
            {
                test: /\.(js|jsx)$/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/react']


                    }
                },
                resolve: { extensions: [".js", ".jsx"] }

            }

        ]
    }
}