<template>
    <div>
        <mt-header fixed title="新闻"></mt-header>
        <ul class="ul">
            <li v-for="item in arr">{{item.title}}</li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{
            arr:[],
            titles:""
        } 
    },
    mounted(){
        //console.log(this.$route)
        let id=this.$route.params.id
            this.axios.get('/shuju').then(res=>{
                this.arr = res.data[id]
                this.title = res.data["log"]
            })
            
            
        }
    }
</script>
<style scoped>
.ul{
    margin-top: 40px;;
}

</style>