<template>
  <div>
    <div class="swiper">
      <div class="swiper-container">
        <div class="swiper-wrapper">
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="https://hw.xesimg.com/ad/2019-09-27/5e2337cbdb0dce559238f0ba76d80399.jpg" />
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="https://hw.xesimg.com/ad/2019-10-09/0fefd26a05c5e1499793c64def3860b8.jpg" />
              </div>
            </a>
          </div>
          <div class="swiper-slide">
            <a href="javascript:" class="link_to_food">
              <div class="food_container">
                <img src="https://hw.xesimg.com/ad/2019-09-03/b95edafe6a8efc094308e12aed41f7dc.jpg" />
              </div>
            </a>
          </div>
        </div>
        <!-- Add Pagination -->
        <div class="swiper-pagination"></div>
      </div>
    </div>
  </div>
</template>
<script>
import Swiper from "swiper";
import "swiper/css/swiper.css";
export default {
  name:"Swiper",
  mounted() {
    // 创建Swiper对象,实现轮播图
    var mySwiper = new Swiper(".swiper-container", {
      loop: true, // 循环模式选项
      autoplay:true,
      // 如果需要分页器
      pagination: {
        el: ".swiper-pagination"
      },
      navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev"
      }
    });
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
.swiper
  width 100%
  height 380px
  background-color #ccc
  .swiper-container
    width 100%
    height 100%
    .link_to_food
      width 100%
      height 100%
      .link_to_food .food_container
        width 100%
        height 100%
        .link_to_food .food_container img
          width 100%
          height 100%
</style>