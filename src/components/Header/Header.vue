<template>
  <div>
    <div class="header">
      <div class="header-context">
        <div class="header-left">
          <p>
            <span class="iconfont icon-gouwuche1"></span>
            <span>北京</span>
            <span>∧</span>
            <span>[为您推荐该地区的课程]</span>
          </p>
          <div class="header-text">
            <span>全国</span>
            <span>北京</span>
            <span>天津</span>
            <span>河北</span>
            <span>河南</span>
            <span>上海</span>
            <span>湖南</span>
            <span>湖北</span>
          </div>
        </div>
        <div class="header-right">
          <a class="a-hover" href="javascript:;">教师资格证公示</a>
          <a class="a-hover" href="javascript:;">客户端下载</a>
          <a class="a-hover" href="javascript:;">收藏夹</a>
          <a class="a-hover" href="javascript:;">我的订单</a>
          <a class="a-hover" href="javascript:;">设置</a>
          <a class="a-hover" @click="goLogin('/Login')" href="javascript:;">立即登录</a>
        </div>
      </div>
    </div>
    <div class="nav">
      <div class="nav-context">
        <h1 class="logo">
          <a href="javascript:;">
            <img src="./imgs/logo.png" alt />
          </a>
        </h1>
        <ul class="nav-list">
          <li class="nav-list-item">
            <a href="javascript:;" :class="{on:$route.path==='/home'}" @click="goto('/home')">选课中心</a>
          </li>
          <li class="nav-list-item">
            <a
              href="javascript:;"
              :class="{on:$route.path==='/courseList'}"
              @click="goto('/courseList')"
            >免费讲座</a>
          </li>
          <li class="nav-list-item">
            <a
              href="javascript:;"
              :class="{on:$route.path==='/personal'}"
              @click="goto('/personal')"
            >学习中心</a>
          </li>
        </ul>
        <div class="nav-input">
          <div class="nav-conent">
            <input
              class="nav-search"
              type="text"
              v-model="serchKey"
              @keyup.13="goSearch"
              placeholder="请输入搜索内容"
            />
            <div class="nav-btn">
              <span class="iconfont icon-sousuo"></span>
            </div>
          </div>
          <div class="nav-input-s">
            <div class="nav-input-s-search">热门搜索</div>
            <a href="javascript:;">
              <span class="nav-one">1</span>
              <span>英语</span>
            </a>
          </div>
        </div>
        <div class="nav-shop">
          <div class="nav-shop-r" @click="goShop('/ShopCart')">
            <span class="iconfont icon-gouwuche1"></span>
            <span>购物车</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Header',
  data(){
    return{
      serchKey:''
    }
  },
  methods: {
    goLogin(path) {
      console.log(this)
      this.$router.replace(path)
    },
    goShop(path) {
      console.log(this)
      this.$router.push(path)
    },
    goto(path) {
      // 判断跳转的路径和当前的路径是否一致
      if (this.$route.path !== path) {
        this.$router.push(path)
      }
    },
    goSearch() {
      this.$router.replace("/search");
    }
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.header
  width 100%
  height 30px
  background-color #333
  .header-context
    width 1200px
    height 30px
    text-align center
    line-height 30px
    margin 0 auto
    position relative
    .header-left
      width 180px
      height 100%
      color #d0d0d0
      p:hover
        color white
        cursor pointer
      span
        font-size 12px
      .header-text
        display none
        width 180px
        height 180px
        background-color #ccc
        position absolute
        top 30px
        z-index 9
        span
          margin 10px
          color white
      &.header-left:hover .header-text
        display block
    .header-right
      width 430px
      height 30px
      font-size 12px
      position absolute
      right 0
      top 0
      color #d0d0d0
      a
        margin 8px
      .a-hover:hover
        color white
.nav
  width 100%
  height 100px
  background-color white
  .nav-context
    width 1200px
    height 100px
    // background-color pink
    margin 0 auto
    position relative
    .logo
      width 170px
      height 100px
      text-align center
      line-height 100px
    .nav-list
      width 490px
      height 100px
      position absolute
      left 170px
      top 0
      display flex
      justify-content space-around
      align-items center
      .nav-list-item
        width 90px
        height 50px
        text-align center
        line-height 50px
        a
          &.on
            color red
        a:hover
          color red
    .nav-input
      width 320px
      height 100px
      // background-color green
      position absolute
      left 660px
      top 0
      .nav-conent
        width 320px
        height 30px
        // background-color pink
        position absolute
        top 35px
        text-align center
        line-height 30px
        border-radius 15px
        border 1px solid #e5e5e5
        padding-left 20px
        color #333
        .nav-search
          width 90%
          height 100%
          border none
          outline 0
          float left
          font-size 12px
        .nav-btn
          float left
          width 10%
          height 30px
          text-align center
          line-height 30px
          cursor pointer
          span
            cursor pointer
        .nav-text
          position absolute
          top 0
          height 30px
          line-height 30px
          right 10%
          .nav-text-a
            display inline
            height 20px
            line-height 20px
            font-size 12px
            color #afafaf
            background #f5f5f5
            border-radius 10px
            padding 0 10px
            margin-right 10px
          a:hover
            color white
            background-color black
      .nav-input-s
        width 300px
        height 100px
        // background blue
        position absolute
        top 65px
        left 10px
        display none
        z-index 999
        .nav-input-s-search
          height 30px
          line-height 30px
          color #333
          font-size 14px
          padding 10px 20px
        a
          height 36px
          line-height 36px
          display block
          color #afafaf
          padding 0 20px
          font-size 14px
          .nav-one
            display inline-block
            width 20px
            height 20px
            color white
            background-color red
            text-align center
            line-height 20px
            margin-right 5px
            border-radius 50%
    .nav-shop
      width 220px
      height 100px
      position absolute
      right 0
      top 0
      .nav-shop-r
        width 88px
        height 32px
        text-align center
        line-height 32px
        position absolute
        right 0
        top 34px
        font-size 12px
        border 1px solid #afafaf
        border-radius 16px
        cursor pointer
      .nav-shop-r:hover
        background-color pink
        border 1px solid red
</style>