<template>
  <router-view></router-view>
</template>
<script>

// 引入组件
import Header from './components/Header/Header.vue'
import Swiper from './components/Swiper/Swiper.vue'
import Search from './components/Search/Search.vue'
import Condition from './components/Condition/Condition.vue'
import Home  from "./pages/Home/Home.vue"

import SearchList from "./pages/SearchList/SearchList.vue"

// 引入接口
import axios from "axios";

export default {
 name: 'App',
 components: {
  Header,
  Search,
  Home,
  SearchList
 },
 
 async mounted () {    
    // const url = `http://localhost:8080/reqCourse`;
    // const response = await axios.get(url);
    // console.log(response)
  }
 
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>