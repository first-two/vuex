<template>
    <div class="a2">
        <mt-header fixed title="首页"></mt-header>
        <h1 class="h1">{{this.$store.state.shuzu}}</h1>
        <h1 class="h1">{{this.$store.state.count}}</h1>
        <h1 class="h1">{{this.$store.state.counts}}</h1>
        <button @click="remove(43984)">点一点</button>
        <vshare></vshare>
        {{$store.state.str}}
        <hr>
        <zizujian @gitcont = "fuji" :max="num"></zizujian>
        <div>{{zonji}}</div>
    </div>
</template>
<script>
import zizujian from "../components/zizujian/022.vue"
export default {
    data(){
        return{ 
            num:1,
            zonji:0
    }
  },
  components:{
    zizujian
  },
  created(){
    
  },
  methods:{
    remove(n){
        this.$store.commit("increment",n) ;
        this.$store.commit("increments",n) ;
        this.$store.getters.abc;
    },
    fuji(count){
        this.zonji = count
    }
  }

}
</script>
<style scoped>
.h1{
    margin-top: 40px;
}
</style>