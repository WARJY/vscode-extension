const { DATA_FLAG, METHOD_FLAG } = require('./symbol.js')
const { BR } = require("./util")

const vue = {
    name: "extension.vue",
    replaceAll: true,
    template:
        `<template>
    <div class="container">

    </div>
</template>`,
    script:
        `<script>
export default {
    name: "",
    data(){
        return {
            ${DATA_FLAG}
        }
    },
    methods:{
        ${METHOD_FLAG}
    }
}
</script>`
}

const elForm = {
    name: "extension.elForm",
    needInput: true,
    template(field) {
        return `<el-form :model="${field}Form">${BR}<el-form-item label="label" prop="prop">${BR}</el-form-item>${BR}</el-form>`
    },
    data(field) {
        return `${field}Form: {${BR}${BR}},`
    },
}

const elInput = {
    name: "extension.elInput",
    needInput: true,
    template(field) {
        return `<el-input v-model="${field}Input" placeholder="请输入" />`
    },
    data(field) {
        return `${field}Input: "",`
    },
}

const elSelect = {
    name: "extension.elSelect",
    needInput: true,
    template(field) {
        let option = `<el-option v-for="(item,index) in ${field}Options" :key="index" :label="item" :value="item" />`
        return `<el-select v-model="${field}Select" placeholder="请选择">${BR}${option}${BR}</el-select>`
    },
    data(field) {
        return `${field}Select: "",${BR}${field}Options: [],`
    },
}

const elTable = {
    name: "extension.elTable",
    needInput: true,
    template(field) {
        let tableColumn = `<el-table-column v-for="(column, index) in ${field}Columns" :key="index" v-bind="column" />`
        let tableColumnOption = `<el-table-column label="操作">${BR}<template slot-scope="scope">${BR}<span>{{ scope.row }}</span>${BR}</template>${BR}</el-table-column>`
        return `<el-table :data="${field}List">${BR}${tableColumn}${BR}${tableColumnOption}${BR}</el-table>`
    },  
    data(field) {
        return `${field}List: [],${BR}${field}Columns: [${BR}{ label: "label", prop: "prop", width: "100", formatter: this.formatter },${BR}],`
    },
    method(field) {
        return `formatter(row, column, value){${BR}return <span>{value}</span>${BR}},`
    },
}

const elTab = {
    name: "extension.elTab",
    template(field) {
        let tabPanel = `<el-tab-pane label="label" name="name"></el-tab-pane>`
        return `<el-tabs v-model="currentTab" type="card" @tab-click="handleTabClick">${BR}${tabPanel}${BR}</el-tabs>`
    },  
    data(field) {
        return `currentTab:"name"`
    },
    method(field) {
        return `handleTabClick(tab){${BR}if(tab.name==="name"){}${BR}},`
    },
}

const elDescript = {
    name: "extension.elDescript",
    template(field) {
        return `<el-descriptions title="title">${BR}<el-descriptions-item label="label">1</el-descriptions-item>${BR}</el-descriptions>`
    }
}

const elDialog = {
    name: "extension.elDialog",
    needInput: true,
    template(field) {
        return `<el-dialog title="title" :visible.sync="${field}DialogVisible" width="30%"></el-dialog>`
    },
    data(field) {
        return `${field}DialogVisible: false`
    },
}

const elDrawer = {
    name: "extension.elDrawer",
    needInput: true,
    template(field) {
        return `<el-drawer title="title" :visible.sync="${field}DrawerVisible" width="30%"></el-drawer>`
    },
    data(field) {
        return `${field}DrawerVisible: false`
    },
}

const elTooltip = {
    name: "extension.elTooltip",
    template(field) {
        return `<el-tooltip content="content">${BR}</el-tooltip>`
    },
}

const elPopover = {
    name: "extension.elPopover",
    template(field) {
        return `<el-popover title="title" width="200" trigger="hover" content="content">${BR}<template slot="reference">${BR}</template>${BR}</el-popover>`
    },
}

const elPopconfirm = {
    name: "extension.elPopconfirm",
    template(field) {
        return `<el-popconfirm title="确定执行操作？">${BR}<template slot="reference"></template>${BR}</el-popconfirm>`
    },
}

const elCard= {
    name: "extension.elCard",
    template(field) {
        return `<el-card header="header" shadow="never" :body-style="{padding:'20px'}">${BR}</el-card>`
    },
}

const elButton= {
    name: "extension.elButton",
    template(field) {
        return `<el-button type="primary"></el-button>`
    },
}

const fetchData= {
    name: "extension.fetchData",
    needInput: true,
    template(field) {
        return `${field}`
    },
    method(field) {
        return `async ${field}(){
            try{
                const { code, data } = await ${field}()
                if(code !== 0) return
            }catch(e){
                this.$message.error(e.toString())
            }
        },`
    },
}

module.exports = {
    vue,
    elForm,
    elInput,
    elSelect,
    elTable,
    elTab,
    elDescript,
    elDialog,
    elTooltip,
    elPopover,
    elPopconfirm,
    elCard,
    elDrawer,
    elButton,

    fetchData
}