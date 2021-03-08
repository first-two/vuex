export default{
    // 调用mutations方法
    addfn({commit},obj){
        commit("add",obj)
    },
    // 调用mutationsd 异步操作的方法
    setcountfn({commit},obj){
        setTimeout(()=>{
            commit("setcount",obj)
        },1000)
    }
}