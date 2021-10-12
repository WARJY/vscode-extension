const vueTemplate = require("./template/vue.js")
const listTemplate = require("./template/list.js")

const vue = {
    name: "extension.vue",
    replaceAll: true,
    template: vueTemplate
}

const list = {
    name: "extension.list",
    replaceAll: true,
    template: listTemplate
}

const elForm = {
    name: "extension.elForm",
    needInput: true,
    template(field) {
        return `<el-form :model="${field}Form">
        <el-form-item label="label" prop="prop">
        </el-form-item>
    </el-form>`
    },
    data(field) {
        return `${field}Form: {},`
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
        return `<el-select v-model="${field}Select" placeholder="请选择">
            <el-option v-for="(item,index) in ${field}Options" :key="index" :label="item" :value="item" />
        </el-select>`
    },
    data(field) {
        return `${field}Select: "",
        ${field}Options: [],`
    },
}

const elTable = {
    name: "extension.elTable",
    needInput: true,
    template(field) {
        return `<el-table :data="${field}List">
            <el-table-column v-for="(column, index) in ${field}Columns" :key="index" v-bind="column" />
            <el-table-column label="操作">
                <template slot-scope="scope">
                    <span>{{ scope.row }}</span>
                </template>
            </el-table-column>
        </el-table>`
    },
    data(field) {
        return `${field}List: [],
        ${field}Columns: [
            { label: "label", prop: "prop", width: "100", formatter: this.formatter },
        ],`
    },
    method(field) {
        return `formatter(row, column, value){
            return <span>{value}</span>
        },`
    },
}

const elPage = {
    name: "extension.elPage",
    needInput: true,
    template(field) {
        return `<el-pagination
        layout="total, sizes, prev, pager, next, jumper"
        :current-page.sync="${field}.page"
        :page-size.sync="${field}.page_size"
        :page-sizes="[10, 20, 50, 100]"
        :total="${field}.total"
        @size-change="${field}SizeChange"
        @current-change="${field}CurrentChange"
    >
    </el-pagination>`
    },
    data(field) {
        return `${field}:{
            page: 1,
            page_size: 10,
            total: 0,
        },`
    },
    method(field) {
        return `${field}SizeChange(value){},
        ${field}CurrentChange(value){},`
    },
}

const elTab = {
    name: "extension.elTab",
    template(field) {
        return `<el-tabs v-model="currentTab" type="card" @tab-click="handleTabClick">
            <el-tab-pane label="label" name="name"></el-tab-pane>
        </el-tabs>`
    },
    data(field) {
        return `currentTab:"name"`
    },
    method(field) {
        return `handleTabClick(tab){
            if(tab.name==="name"){}
        },`
    },
}

const elDescript = {
    name: "extension.elDescript",
    template(field) {
        return `<el-descriptions title="title">
            <el-descriptions-item label="label">1</el-descriptions-item>
        </el-descriptions>`
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
        return `<el-tooltip content="content">
        </el-tooltip>`
    },
}

const elPopover = {
    name: "extension.elPopover",
    template(field) {
        return `<el-popover title="title" width="200" trigger="hover" content="content">
            <template slot="reference"></template>
        </el-popover>`
    },
}

const elPopconfirm = {
    name: "extension.elPopconfirm",
    template(field) {
        return `<el-popconfirm title="确定执行操作？">
            <template slot="reference"></template>
        </el-popconfirm>`
    },
}

const elCard = {
    name: "extension.elCard",
    template(field) {
        return `<el-card header="header" shadow="never" :body-style="{padding:'20px'}">
        </el-card>`
    },
}

const elButton = {
    name: "extension.elButton",
    template(field) {
        return `<el-button type="primary" size="mini"></el-button>`
    },
}

const fetchData = {
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

const functions = {
    name: "extension.functions",
    needInput: true,
    template(field) {
        return `${field}`
    },
    method(field) {
        let params = field
        if (field.indexOf("(") === -1) params += "()"
        return `${params}{
        },`
    },
}

const computed = {
    name: "extension.computed",
    needInput: true,
    template(field) {
        return `${field}`
    },
    computed(field) {
        return `${field}(){
            return
        },`
    },
}

module.exports = {
    vue,
    list,
    elForm,
    elInput,
    elSelect,
    elTable,
    elPage,
    elTab,
    elDescript,
    elDialog,
    elTooltip,
    elPopover,
    elPopconfirm,
    elCard,
    elDrawer,
    elButton,

    fetchData,
    functions,
    computed
}