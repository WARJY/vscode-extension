const { DATA_FLAG, METHOD_FLAG, COMPUTED_FLAG, OPTION_FLAG } = require('../symbol.js')

module.exports = `
<template>
    <div class="container">

    </div>
</template>

<script>
export default {
    name: "",
    data(){
        return {
            ${DATA_FLAG}
        }
    },
    computed:{
        ${COMPUTED_FLAG}
    },
    methods:{
        ${METHOD_FLAG}
    },
    ${OPTION_FLAG}
}
</script>
`