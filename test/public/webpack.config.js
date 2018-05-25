module.exports = {
    devtool: 'inline-source-map',
    entry: ['./src/index.js'],
    output: {
        filename: './index.bundle.js',
        sourceMapFilename: './javascripts/index.bundle.js.map'
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                query: { presets: ['es2015'] }
            }]
    },
    plugins: []
};