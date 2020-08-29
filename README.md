# webpack-lesson
webpack 学习课程源代码

## 全局安装webpack的优缺点
### 优点
全局安装一次，所有项目均可以使用

### 缺点
低于当前全局webpack版本的项目无法运行。例如，全局安装的webpack版本为v4，有两个项目，一个是v3版本配置的，一个是通过v4配置的，那么v3的项目就无法运行起来。

## npx webpack -v
npx命令会在当前文件夹下的node_modules下去查找webpack
