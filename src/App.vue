<template>
<router-view></router-view>
</template>
<script>
// 引入组件
import Header from './components/Header/Header.vue'
// import Swiper from './components/Swiper/Swiper.vue'
// import Search from './components/Search/Search.vue'
// import Condition from './components/Condition/Condition.vue'

// 引入接口

export default {
 name: 'App',
 components: {
  Header
  // Swiper,
  // Search,
  // Condition
 },
 mounted () {
    // this.$store.dispatch('getCourse')
    // this.$store.dispatch('getChair')
 }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">

</style>