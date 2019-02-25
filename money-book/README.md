
## 代码文件结构
- components 文件夹存放所有的展示型组件
- containers 文件夹存放所有的 容器型组件

- components containers文件夹下的__test__文件夹放所有组件测试文件


- 使用svg图表库 而不是 font icon 
- 很多 free icon set -icomoon 、 ionicons


## 通用测试框架 - Jest
- [通用测试框架](https://jestjs.io/zh-Hans/)
- [断言](https://jestjs.io/docs/zh-Hans/using-matchers)
- create-react-app自动集成test（包括Jest断言库） `npm test src/example.test.js`

- 



## React 测试工具
- TDD （测试驱动开发(Test-Driven Development)）
- React 官方测试工具 - ReactTestUtils
- Airbnb 基于官方的封装 - Enzyme
- 测试时注意代码提示，【-u snapshot updated.】 `1 snapshot failed from 1 test suite. Inspect your code changes or press `u` to update them.`

### Enzyme 优点
- 简单 易懂
- 类似Jquery 链式写法
- 两种测试方法 （Shallow Rendering / Dom Rendering)

### 价格列表单元测试用例分析
- 传入特定数组 是否渲染对应长度的条目
- 每个条目是否渲染特定组件和内容
- 点击按钮是否触发特定回调
- 给viewtab添加测试用例


