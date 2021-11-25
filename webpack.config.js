const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    context: path.resolve(__dirname, 'src'),
    entry: ['./index.js'],
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'bundle.js',
        publicPath: '/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    { loader: "style-loader" },
                    { loader: "css-loader" },
                ]
            },
            {
                exclude: /node_modules|packages/,
                test: /\.jsx?$/,
                use: 'babel-loader'
            },
            {
                test: /\.(gif|png|jpe?g|svg)$/i,
                use: [
                    'file-loader',
                ],
            }
        ],
    },
    devtool: "source-map",
    optimization: {
        moduleIds: 'named',
    },
    devServer: {
        historyApiFallback: true,
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve('./public', 'index.html'),
            filename: 'index.html',
            hash: true
        }),
    ],
    resolve: {
        extensions: ['.js', '.jsx']
    }
}
