// 1 Tree Shaking 只支持 ES Module
// 2 在package.json中设置 sideEffects，sideEffects 为数组，表示不需要Tree Shaking 的某个或某类模块，例如 @babel/polyfill；sideEffects 为false表示所有的模块都需要 Tree Shaking;
// 3 在webpack.config.js文件中，设置optimization.usedExports 为true; (生产环境默认设置了该选项，无需设置)
// 4 开发环境即使设置了相关Tree Shaking选项，打包的代码中也不会去除没有被使用的代码，为了保证开发环境的source-map提示的信息无源代码一致

export const add = (a, b) => {
  console.log('add:', a + b)
}

export const minus = (a, b) => {
  console.log('minus:', a - b);
}