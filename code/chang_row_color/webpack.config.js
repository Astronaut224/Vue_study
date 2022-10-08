const path = require('path')

module.exports = {
    mode: 'development',

    // 处理哪个文件
    entry: path.join(__dirname, './src/index.js'),
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'js/main.js'
    },

    devServer: {
        // 首次打包成功后自动打开浏览器
        open: true,
        // 在 http 协议中，如果端口号是80，则可以被省略
        port: 80,
        // 指定运行的主机
        host: '127.0.0.1'
    },

    // eval-source-map仅限在开发模式下使用，不建议在生产环境下用
    // 此选项生成的SourceMap可以保证运行时报错行数与源代码行数一致
    devtool: 'eval-source-map',

    module: {
        rules: [
            // 定义了不同模块对应的 loader
            {test: /\.css$/, use:["style-loader", "css-loader"]},
            // 处理 .less 文件的loader
            {test: /\.less$/, use:["style-loader", "css-loader", "less-loader"]},
            // 处理图片文件的loader
            {test: /\.jpg|png|gif$/, use:["url-loader?limit=222229&outputPath=images"]},
            // 处理高级的JS语法的loader，必须使用exclude指定排除项（排除第三方的js包里的语法）
            {test: /\.js$/, use: "babel-loader", exclude: /node_modules/}
        ]
    }
}