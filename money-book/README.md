
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
- 机器检测重复的代码逻辑比人工检测准确得多，执行多遍判断相同的返回结果

### Enzyme 优点
- 简单 易懂
- 类似Jquery 链式写法
- 两种测试方法 （Shallow Rendering / Dom Rendering)

### 价格列表单元测试用例分析
- 传入特定数组 是否渲染对应长度的条目
- 每个条目是否渲染特定组件和内容
- 点击按钮是否触发特定回调
- 给viewtab添加测试用例

### 月份选择单元测试用例分析
- 测试默认状态 - 按钮上渲染年和月是否正确，下拉框是否显示等
- 测试点击以后状态 - 下拉框是否显示， 年和月的列表是否正确等
- 点击年和月份以后是否触发正确的回调
- 对于传的一些特殊的值是否有特殊处理
- 特殊 DOM 事件的一些触发和处理方法



## 首页单元测试用例分析（UT）
- 分析测试用例就是分析需求
- 测试默认状态 - 是否正确渲染特定组件和数据 等
- 测试交互 - 点击交互该组件的 state 是否有相应的修改
- 测试交互 - 对应操作触发以后展示型组件的属性是否修改



## TDD 的开发流程
- 分析需求
- 编写测试用例
- 实现组件的具体实现

