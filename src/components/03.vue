<template>
    <div class="a2">
        <mt-header fixed title="新闻"></mt-header>
        <div class="new">
            <router-link to="/a301/yule">
                <h2>娱乐新闻</h2>
            </router-link>
            <router-link to="/a301/shehui"> 
                <h2>社会新闻</h2>       
            </router-link>
            {{$store.state.str}}
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped>
    .new{
        margin-top: 40px;
    }
</style>