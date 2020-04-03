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
        publicPath: "http://localhost:8082/",
    },
    devServer: {
        contentBase: path.join(__dirname, "dist"),
        port: 8082
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
                loader: 'vue-loader'
            },
            {
                test: /\.js$/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new VueLoaderPlugin(),
        new ModuleFederationPlugin({
            name: "app_02",
            library: { type: "var", name: "app_02" },
            filename: "remoteEntry.js",
            exposes: {
                Test: './src/views/Test.vue'
            },
            shared: ["vue", "vue-router"]
        }),
        new HtmlWebpackPlugin({
            template: "./public/index.html",
            inject: true,
            title: 'app-02 测试'
        }),
        //开发环境下的baseURL
        new webpack.DefinePlugin({
            BASE_URL: JSON.stringify('./')
        })
    ]
}