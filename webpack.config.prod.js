const base = require('./webpack.config')
module.exports = Object.assign({},
    base, {
        mode: 'production',
        // 外部依赖， 不打包react 和react - dom
        externals: {
            react: {
                commonjs: 'react', // modeuls.exports = {}
                commonjs2: 'react',
                amd: 'react',
                root: 'react'
            },
            'react-dom': {
                commonjs: 'react-dom',
                commonjs2: 'react-dom',
                amd: 'react-dom',
                root: 'react-dom'
            }
        }
    }
)