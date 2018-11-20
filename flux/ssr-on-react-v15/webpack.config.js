module.exports = {
    entry: './client.js',
    output: {
        filename: 'client.bundle.js'
    },

    module: {
        rules: [
            // babel-loaderの設定
            // 拡張子が.jsのファイルにBebelのトランスパイルを実行
            // 下記のプリセットを指定
            // babel-preset-env
            // babel-preset-react
            {
                test: /\.js$/,
                loader: 'babel-loader',
                options: {
                    presets: ['env', 'react']
                }
            }
        ]
    }
};
