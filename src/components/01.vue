<template>
  <div id="a1">
     <mt-tabbar>
         <router-link to="/a2" tag="div">
            <mt-tab-item id="tab1">首页</mt-tab-item>
         </router-link>
          <router-link to="/a3" tag="div">
            <mt-tab-item id="tab2"> 新闻</mt-tab-item>
         </router-link>
         <router-link to="/a4" tag="div">
            <mt-tab-item id="tab3">收藏</mt-tab-item>
         </router-link>
         <router-link to="/a5" tag="div">
            <mt-tab-item id="tab4">我的</mt-tab-item>
         </router-link>
    </mt-tabbar>

  </div>
</template>

<style scoped>
.mint-tabbar>div{
    flex: 1;
}
    
</style>
