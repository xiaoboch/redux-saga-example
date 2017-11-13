module.exports = {
    entry: [
        './src/index.tsx'
    ],
    output: {
        path: __dirname,
        publicPath: '/',
        filename: 'bundle.js'
    },
    devtool: "source-map",

    module: {
        rules: [
            {test: '/\.tsx?$/', loader: 'awesome-typescript-loader'},
            {enforce: "pre", test: '/\.js$/', loader: 'source-map-loader'}
        ],
        loaders: [{
            exclude: /node_modules/,
            loader: 'babel',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            }
        }]
    },
    externals: {
        "react": "React",
        'react-dom': "ReactDOM"
    },
    resolve: {
        extensions: ['', '.js', '.jsx', 'ts', 'tsx', 'json']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        stats: {chunks: false},
        inline: true,
        watchContentBase: true
    }
};
