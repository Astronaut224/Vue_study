module.exports = {
    // 声明babel可用的插件
    // 调用babel-loader时，会加载plugins插件来使用
    plugins: [['@babel/plugin-proposal-decorators', { legacy: true }]]
}