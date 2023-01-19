let common_config = {
    mode: 'development',
    module: {
        rules: [{
            test: /\.ts$/,
            use: [{ loader: 'ts-loader' }]
        }]
    },
};

module.exports = [
    Object.assign({}, common_config, {
        target: 'electron-main',
        entry: {
            main: './main.ts',
        },
        output: {
            filename: '[name]-bundle.js'
        },
    }),
    Object.assign({}, common_config, {
        target: 'electron-renderer',
        entry: {
            renderer: './src/renderer.ts',
        },
        output: {
            filename: '[name]-bundle.js',
        },
    }),
    Object.assign({}, common_config, {
        target: 'electron-preload',
        entry: {
            preload: './preload.ts',
        },
        output: {
            filename: '[name]-bundle.js',
        },
    })
]