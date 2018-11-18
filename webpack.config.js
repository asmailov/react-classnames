const path = require('path');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');

module.exports = (_, { mode }) => {
    const isProd = mode === 'production';
    const isDev = mode === 'development';

    return {
        entry: './src/index.tsx',
        output: {
            filename: isProd ? 'main.min.js' : 'main.js',
            path: path.resolve(__dirname, 'dist'),
            libraryTarget: 'umd',
            library: "ReactClassnamed",
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
                            loader: 'ts-loader'
                        }
                    ],
                },
            ],
        },
        plugins: [
            new ForkTsCheckerWebpackPlugin()
        ],
        externals: {
            react: {
                root: 'React',
                commonjs2: 'react',
                commonjs: 'react',
                amd: 'react'
            },
            'react-dom': {
                root: 'ReactDOM',
                commonjs2: 'react-dom',
                commonjs: 'react-dom',
                amd: 'react-dom'
            }
        },
        devtool: isDev && 'source-map'
    };
}