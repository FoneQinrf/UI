/*
 * @Descripttion: 
 * @Author: Fone丶峰
 * @LastModifiedBy: Fone丶峰
 * @Date: 2019-08-02 16:55:22
 * @LastEditors: Fone丶峰
 * @LastEditTime: 2019-08-02 17:19:25
 * @email: 15921712019@163.com
 * @gitHub: https://github.com/FoneQinrf
 */
module.exports = {
  presets: [
    '@vue/app'
  ],
  chainWebpack: config => {
    config.module.rule('md')
      .test(/\.md|\.vue/)
      .use('vue-loader')
      .loader('vue-loader')
      .end()
      .use('vue-markdown-loader')
      .loader('vue-markdown-loader/lib/markdown-compiler')
      .options({
        raw: true
      })
  }
}
