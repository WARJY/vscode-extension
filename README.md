# vscode-plugin-billionbottle README

本插件包含以下两种能力：
1. 前端开发中常用的 **代码片段** 
2. 基于 **vue2.0** 标准SFC（单文件组件）及 **element-ui** 的常用组件代码生成命令

## 代码片段

### 基础javascript代码片段

| 触发符号  | 片段内容            |
|-----------|---------------------|
| .forEach  | forEach代码块       |
| .map      | map代码块           |
| .filter   | filter代码块        |
| .some     | some代码块          |
| .reduce   | reduce代码块        |
| .includes | includes代码块      |
| .find     | find代码块          |
| .console  | console.log代码块   |
| .copy     | 数组/对象拷贝代码块 |

### element-ui代码片段

| 触发符号 | 片段内容       |
|----------|----------------|
| .confirm | $confirm代码块 |

### vue-template代码片段

| 触发符号 | 片段内容    |
|----------|-------------|
| v-for    | v-for代码块 |

## 代码生成命令

> 代码生成通过替换模板中的特殊flag工作，使用命令 **vue** 可以生成带有flag的模板代码

```vue
<template>
    <div class="container">

    </div>
</template>

<script>
export default{
    data(){
        return {
            /* DATA APPEND FLAG, dont del this line */
        }
    },
    methods: {
        /* METHOD APPEND FLAG, dont del this line */
    }
}
</script>
```

执行代码生成命令会进行以下动作：
1. 在光标选中处生成对应功能的代码块
2. 涉及变量及函数生成的命令会要求用户输入变量/函数的标识字段
3. 在data和methods中声明组件所需的变量和函数

| 命令         | 命令内容                                                                    |
|--------------|-----------------------------------------------------------------------------|
| vue          | 生成带有flag标识的vue组件模板                                               |
| elForm       | 输入变量标识，生成**el-form**组件结构及**formData**                         |
| elInput      | 输入变量标识，生成**el-input**组件结构及绑定变量                            |
| elSelect     | 输入变量标识，生成**el-select**&**el-option**组件结构及绑定变量             |
| elTable      | 输入变量标识，生成**el-table**组件结构及绑定变量，columns&formatter配置函数 |
| elTab        | 输入变量标识，生成**el-tab**组件结构及绑定变量，tab切换函数                 |
| elDialog     | 输入变量标识，生成**el-dialog**组件结构及绑定变量                           |
| elDrawer     | 输入变量标识，生成**el-drawer**组件结构及绑定变量                           |
| elDescript   | 生成**el-descript**&**el-descriptions-item**组件结构                        |
| elTooltip    | 生成**el-tooltip**组件结构及绑定变量                                        |
| elPopover    | 生成**el-popover**组件结构                                                  |
| elPopconfirm | 生成**el-popconfirm**组件结构                                               |
| elCard       | 生成**el-card**组件结构                                                     |
| elButton     | 生成**el-button**组件结构                                                   |
| fetchData    | 输入变量标识，生成**async dataFetch**函数模板                               |