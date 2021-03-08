export default{
    abc(state){
        if(state.counts>100000){
          state.count=5
        }else{
          return
  
        }
      },
      srtss(state){
        return state.str.slice(0,2)
      }
}