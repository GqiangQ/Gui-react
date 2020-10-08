const loader = require('awesome-typescript-loader');
const path = require('path');
module.exports = {
    node: { global: true },
    target: 'node',
    // mode: 'production',
    // 识别一些
    resolve: {
        extensions: ['.ts', '.tsx', '.js', '.jsx']
    },
    entry: {
        index: './lib/index.tsx'
    },
    output: {
        path: path.resolve(__dirname, 'dist/lib'),
        library: 'gui-react',
        globalObject: 'this',
        libraryTarget: 'umd'
    },
    module: {
        rules: [{
                test: /\.ts(x?)$/,
                loader: 'awesome-typescript-loader'
            },
            {
                test: /\.s([ac])ss$/,
                use: ['style-loader',
                    'css-loader',
                    "sass-loader"
                ]
            }
        ]
    },
    devServer: {
        port: 3030, //端口
    },
    watchOptions: {
        poll: 1000, //监测修改的时间(ms)
        aggregateTimeout: 500, //防止重复按键，500毫秒内算按一次
        ignored: /node_modules/, //不监测
    }
}