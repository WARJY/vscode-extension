const { DATA_FLAG, METHOD_FLAG, COMPUTED_FLAG, OPTION_FLAG } = require('../symbol.js')

module.exports = `
<template>
    <div class="container">
        <el-form inline @submit.native.prevent>

            <el-form-item class="inline-item" label="关键字">
                <el-input
                    v-model="query.search"
                    placeholder="请输入关键字"
                    style="width:200px"
                    @keyup.enter.native="handleCurrentChange(1)"
                />
            </el-form-item>

            <el-button
                @click="handleCurrentChange(1)"
                type="primary"
            >查 询
            </el-button>
        </el-form>

        <el-table :data="dataList">
            <el-table-column v-for="(column, index) in columns" :key="index" v-bind="column" />
            <el-table-column label="操作" width="200">
                <template slot-scope="scope">
                    <span>{{ scope.row }}</span>
                </template>
            </el-table-column>
        </el-table>

        <el-pagination
            layout="total, sizes, prev, pager, next, jumper"
            :current-page.sync="query.page"
            :page-size.sync="query.page_size"
            :page-sizes="[10, 20, 50, 100]"
            :total="query.total"
            @size-change="handleSizeChange"
            @current-change="handleCurrentChange"
        />
    </div>
</template>

<script>
import listMixin from "@/mixins/list-mixin.js";
import { fetchData } from '@/apis';

export default {
    name: "",
    mixins: [
        listMixin({
            queryFn: "queryData",
            queryForm: "query",
        }),
    ],
    data(){
        return {
            query: {
                search: "",
                page: 1,
                page_size: 10,
                total: 0
            },
            dataList: [],
            columns: [
                { label: "label", prop: "prop", width: "100", formatter: this.formatter },
            ],
            ${DATA_FLAG}
        }
    },
    computed:{
        ${COMPUTED_FLAG}
    },
    mounted(){
        this.queryData()
    },
    methods:{
        async queryData(){
            const { code, data } = await fetchData({
                ...this.query,
            })
            this.dataList = data.items
            this.query.total = data.total_num
        },
        formatter(row, column, value){
            return <span>{value}</span>
        },
        handleSizeChange(page_size){
            this.query.page_size = page_size
            this.handleCurrentChange(1)
        },
        handleCurrentChange(page){
            this.query.page = page
            this.queryData()
        }
        ${METHOD_FLAG}
    },
    ${OPTION_FLAG}
}
</script>
`