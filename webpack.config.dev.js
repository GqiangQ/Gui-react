const HtmlWebpackPlugin = require('html-webpack-plugin')
const base = require('./webpack.config')
module.exports = Object.assign({},
    base, {
        mode: 'development',
        // 改写html的插件， 把打包的js引入到jinde.html中
        plugins: [
            new HtmlWebpackPlugin({
                title: 'Gui-React',
                template: 'index.html'
            })
        ],
    }
)