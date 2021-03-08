<template>
    <div class="a2">
        <mt-header fixed title="收藏"></mt-header>
        <h1>8888</h1>
        {{$store.state.str}}{{shuzu}}
        <hr>
        <div>{{srtss}}</div>
        <hr>
        <button @click="btn">按钮</button>
        <hr>
        <div>
            <ul>
                <li v-for="(item,index) in list"
                 :key="index"
                 @click="btn(item.name)"
                 >
                    {{item.name}}
                </li>
            </ul>
        </div>
        <hr>
        <h4>这里即将展示点击数据：{{usname}}</h4>
        <hr>
        <button @click="hell_word">常量按钮</button>
    </div>
</template>
<script>
import {mapState,mapGetters,mapMutations} from 'vuex';
export default {
    name:'aa',
    computed:{//计算属性
        // 只要和属性相关的，都放到computed里面。也就是mapState和mapGetters
        ...mapState(['shuzu','str','list','usname']),
        ...mapGetters(['srtss'])
    },
    methods:{
        ...mapMutations(['setname','setnames','hell_word']),
        btn(id){
            this.setname(id)
            this.setnames({//当接收多个值的时候需要以对象的形式传参
                id,
                a:1
            })
        }
        
    }
}
</script>
<style scoped>
ul li{
    list-style: none;
    margin-right: 10px;
}
</style>