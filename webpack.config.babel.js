import 'babel-core/register';
import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';

module.exports = {
    context : path.resolve('src'),
    entry: {
        app: 'app.jsx'
    },
    resolve: {
        root: path.resolve(`${__dirname}/src`),
        extensions: ['', '.jsx', '.js', '.scss']
    },
    output: {
        path: path.resolve(`${__dirname}/build`),
        filename: 'js/[name].js',
        hash: true
    },
    module: {
        loaders: [{
            test: /\.jsx$|\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader'
        }, {
            test: /\.scss$/,
            exclude: /css-styles\.scss/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?modules!sass-loader')
        }, {
            test: /\.scss$/,
            exclude: /css-react-modules-styles\.scss$|css-modules-styles\.scss$/,
            loader: ExtractTextPlugin.extract('style-loader', 'css-loader?sass-loader')
        }]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: 'index.html'
        }), 
        new ExtractTextPlugin('bundle.css'),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        new webpack.DefinePlugin({
          'process.env': { 
             NODE_ENV: JSON.stringify('production') 
           }
        })
    ],
    watch : true
};
