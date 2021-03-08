import { hell_word,add,jian,heji } from './changliang/tishiyu'
//引入常量js
export default{
    increment (state,n) {
        state.counts+=n
      },
      increments (state) {
        state.count++
      },
      setname(state,id){
        state.usname = id;
      },
      setnames(state,obj){
        console.log(obj.id+'----'+obj.a)
      },
      run(){
        console.log("这是写在vuex内，在min.js调用的全局")
      },
      [hell_word](){
        alert(1)
      },
      [add](state,obj){
        alert(obj.a)//action传值过来的
        state.count++;
        this.commit("heji");
      },
      [jian](state){
        state.count--;
        this.commit("heji");
      },
      [heji](state){
        state.zonjia=state.count*10
      },
      setcount(state,obj){
        state.count += obj.num
        // srtTimeout(()=>{ 这个异步操作在这里是不能执行的，需要在actions里面来使用异步操作调用这mutations里面的方法
        //   state.count += obj.num
        // },1000)
      }
}