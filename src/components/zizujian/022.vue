<template>
<div>
    <div>父子组件传值demo</div> 
    <h1>{{max}}</h1>
    <button @click="adds">加一加</button>

</div> 
</template>
<script>
export default {
    name:'zizujian',
    props:[
    "max"
  ],
    data(){
        return{

        }
    },
     methods:{
        adds(){
            this.$emit("gitcont",parseInt(2))
        }
    }
}
</script>