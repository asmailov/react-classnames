const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

const isProd = process.env.NODE_ENV !== 'production';
const isDev = !isProd;

module.exports = {
    entry: './src/index.tsx',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist'),
    },
    resolve: {
        extensions: ['.tsx', '.ts', '.js', '.jsx'],
    },
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                enforce: 'pre',
                use: [
                    {
                        loader: 'tslint-loader',
                        options: {
                            emitErrors: true,
                        }
                    }
                ]
            },
            {
                test: /\.tsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader'
                    }
                ],
            },
        ],
    },
    plugins: [
        new ForkTsCheckerWebpackPlugin()
    ],
    externals: isProd ? {
        react: 'React',
        'react-dom': 'ReactDOM'
    } : {},
    devtool: isDev && 'source-map'
};