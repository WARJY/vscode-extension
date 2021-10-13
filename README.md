# vscode-plugin-billionbottle README

本插件包含以下两种能力：

1. 前端开发中常用的 **代码片段**
2. 基于 **vue2.0** 标准 SFC（单文件组件）及 **element-ui** 的常用组件代码生成命令

## 代码片段

### 基础 javascript 代码片段

| 触发符号    | 片段内容              |
| ----------- | --------------------- |
| .forEach    | forEach 代码块        |
| .map        | map 代码块            |
| .filter     | filter 代码块         |
| .some       | some 代码块           |
| .reduce     | reduce 代码块         |
| .includes   | includes 代码块       |
| .find       | find 代码块           |
| console     | console.log 代码块    |
| copy        | 数组/对象拷贝代码块   |
| setTimeout  | setTimeout 代码块     |
| setInterval | setInterval 代码块    |
| .keys       | Object.keys 代码块    |
| .values     | Object.values 代码块  |
| .entries    | Object.entries 代码块 |

### element-ui 代码片段

| 触发符号 | 片段内容        |
| -------- | --------------- |
| confirm  | $confirm 代码块 |
| message  | $message 代码块 |

### vue-template 代码片段

| 触发符号 | 片段内容     |
| -------- | ------------ |
| v-for    | v-for 代码块 |

### vue-script 代码片段

| 触发符号 | 片段内容                 |
| -------- | ------------------------ |
| props    | option 组件 props 代码块 |
| watch    | option 组件 watch 代码块 |
| router   | routerPush 代码块        |
| router   | routerOpen 代码块        |

### 代码生成 FLAG 片段

| 触发符号 | 片段内容                     |
| -------- | ---------------------------- |
| flag     | 用于代码生成的 DATA_FLAG     |
| flag     | 用于代码生成的 METHOD_FLAG   |
| flag     | 用于代码生成的 COMPUTED_FLAG |

## 代码生成命令

> 代码生成通过替换模板中的特殊 flag 工作，使用 flag 代码片段或模板命令（如 **vue**）可以生成带有 flag 的模板代码

```vue
<template>
  <div class="container"></div>
</template>

<script>
export default {
  data() {
    return {
      /* DATA APPEND FLAG, dont del this line */
    };
  },
  computed: {
    /* COMPUTED APPEND FLAG, dont del this line */
  },
  methods: {
    /* METHOD APPEND FLAG, dont del this line */
  },
};
</script>
```

执行代码生成命令会进行以下动作：

1. 在光标选中处生成对应功能的代码块
2. 涉及变量及函数生成的命令会要求用户输入变量/函数的标识字段
3. 在 option 组件中声明组件所需的变量和函数

举个栗子：

1. F1 执行 elForm 命令，输入变量标识 **test**
2. 则在光标处生成 el-form 组件结构，绑定 **testForm** 对象，同时在 data 中声明变量 **testForm**

```vue
<template>
  <div class="container">
    <el-form :model="testForm">
      <el-form-item label="label" prop="prop"> </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testForm: {},
      /* DATA APPEND FLAG, dont del this line */
    };
  },
  computed: {
    /* COMPUTED APPEND FLAG, dont del this line */
  },
  methods: {
    /* METHOD APPEND FLAG, dont del this line */
  },
};
</script>
```

### 模板命令

模板命令会重写整个文档，生成特定的模板代码

| 命令 | 命令内容                                   |
| ---- | ------------------------------------------ |
| vue  | 生成带有 flag 标识的 vue 组件模板          |
| list | 生成带有 flag 标识的 vue list 页面组件模板 |

### 组件命令

组件命令会生成组件结构代码，并在 option 中声明对应的变量或函数

| 命令         | 命令内容                                                                                                                    |
| ------------ | --------------------------------------------------------------------------------------------------------------------------- |
| elForm       | 输入变量标识，生成**el-form**组件结构及**formData**                                                                         |
| elInput      | 输入变量标识，生成**el-input**组件结构及绑定变量                                                                            |
| elSelect     | 输入变量标识，生成**el-select**&**el-option**组件结构及绑定变量                                                             |
| elTable      | 输入变量标识，生成**el-table**组件结构及绑定变量，columns&formatter 配置函数                                                |
| elTab        | 输入变量标识，生成**el-tab**组件结构及绑定变量，tab 切换函数                                                                |
| elDialog     | 输入变量标识，生成**el-dialog**组件结构及绑定变量                                                                           |
| elDrawer     | 输入变量标识，生成**el-drawer**组件结构及绑定变量                                                                           |
| elDescript   | 生成**el-descript**&**el-descriptions-item**组件结构                                                                        |
| elTooltip    | 生成**el-tooltip**组件结构及绑定变量                                                                                        |
| elPopover    | 生成**el-popover**组件结构                                                                                                  |
| elPopconfirm | 生成**el-popconfirm**组件结构                                                                                               |
| elCard       | 生成**el-card**组件结构                                                                                                     |
| elButton     | 生成**el-button**组件结构                                                                                                   |
| fetchData    | 输入变量标识，生成**async dataFetch**函数模板                                                                               |
| functions    | 输入函数名及参数，生成**methods**函数声明，如@click=""时输入 test(a)，则填入@click="test(a)"，同时在 methods 声明 test(a){} |
