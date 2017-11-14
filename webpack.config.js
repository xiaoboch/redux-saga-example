var webpack = require("webpack");

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
            {test: /\.ts|\.tsx$/, loader: 'awesome-typescript-loader'},
            {enforce: "pre", test: '/\.js$/', loader: 'source-map-loader'}
        ],

    },
    // externals: {
    //     "react": "React",
    //     'react-dom': "ReactDOM"
    // },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
    },
    devServer: {
        historyApiFallback: true,
        contentBase: './',
        stats: {chunks: false},
        inline: true,
        watchContentBase: true
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        }),
    ],
};
