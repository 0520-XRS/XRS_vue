<template>
<div>
  轮播图
</div>
</template>
<script>
import axios from "axios";
export default {
  name:"Swiper",
  async mounted () {
    const url = `http://localhost:8080/reqCourse`;
    const response = await axios.get(url);
    console.log(response)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
</style>