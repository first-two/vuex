<template>
    <div class="a2">
        <mt-header fixed title="我的"></mt-header>
        <div class="aa">
            <button class="bb" @click="jian">-</button>
            <h1>{{count}}</h1>
            <button class="cc" @click="add">+</button>
        </div>
        <div>合计：<span>{{zonjia}}</span></div>
        <hr>
        <div> Action的测试</div>
        <h1>{{count}}</h1>
        <button @click="btn">按钮</button>
        <hr style="margin-top:30px;">
        <button @click="btnrun">检测mutations和actions是区别</button>
        <button @click="btnruns">检测mutations和actions是区别</button>

    </div>
</template>
<script>
import {mapState,mapMutations,mapActions} from 'vuex'
export default {
    name:'aa',
    computed:{//计算属性
        ...mapState(['count','zonjia'])
    },
    methods:{
        ...mapMutations(['add','jian','setcount']),
        ...mapActions(['addfn','setcountfn']),
        btn(){
            this.addfn({//传过去一个对象
                a:1
            })
        },
        btnrun(){
            this.setcount({
                num:10
            })
        },
        btnruns(){
            this.setcountfn(
                {
                    num:10
                }
            )
        }
    }

}
</script>
<style scoped>
*{margin: 0;padding: 0;}
    .aa{
        margin-top: 40px;
    }
    .bb{
        float: left;
        height: 50px;
        width: 50px;
    }
    .cc{
        float: right;
         height: 50px;
         width: 50px;
    }
    h1{width: 50%;display: inline-block; height: 50px;line-height: 50px;}
</style>