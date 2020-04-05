const path = require('path');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ModuleFederationPlugin = require("webpack/lib/container/ModuleFederationPlugin");
const VueLoaderPlugin = require('vue-loader/lib/plugin');
const webpack = require('webpack');

module.exports = {
    entry: './src/index.js',
    mode: 'development',
    devtool: "source-map",
    output: {
        publicPath: "http://localhost:8081/",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8081
    },
    resolve: {
        extensions: ['*', '.js', '.vue', '.json'],
        alias: {
            'assets': path.resolve(__dirname, './src/assets'),
            'vue$': 'vue/dist/vue.esm.js',
            '@': path.join(__dirname, './src')
        }
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                use: 'vue-loader',
                exclude: file => (
                    /node_modules/.test(file) &&
                    !/\.vue\.js/.test(file)
                )
            },
            {
                test: /\.js$/,
                use: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: "app_01",
            library: { type: "var", name: "app_01" },
            remotes: {
                app_02: "app_02",
                app_03: "app_03"
            }
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: true,
            title: 'app_01 测试'
        }),
        //开发环境下的baseURL
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('./')
        })
    ]
}