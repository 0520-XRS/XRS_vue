<template>
  <div class="container">
    <Header/>
    <div class="Detail_wrap">
      <div class="title">
        <a href="javascript:;" @click="$router.push('/Home')">首页</a>
        <span class="icon">></span>
        <span class="team"></span>
      </div>
      <div class="main">
        <div class="content">
          <div class="course_card">
            <div class="card_title">
              <span>{{course.courseName}}</span>
            </div>
            <div class="card-info">
              <i class="iconfont1 icon-lishi"></i>
              <span>{{course.courseTime}}</span>
            </div>
            <div class="card_teacher">
              <img
                :src="course.teachAvatar"
                alt
                class="teacher_avatar"
              />
              <div class="teacher_name">{{course.teachName}}</div>
            </div>
            <div class="card_border"></div>
            <div class="card_bottom">
              <div class="card-bottom_price">￥399</div>
              <div class="card-bottom_num">
                <!-- @click="$router.push(`/ShopCart?course=${JSON.stringify(course)}`)" -->
                <el-button class="btn1" @click="addToCart(course)">加入购物车</el-button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="openList">
        <div class="listHeader">课程大纲</div>
        <div class="listContent">
          <div class="course">课程大纲(4次课)</div>
          <ul class="Listul">
            <li class="item">
              <p class="p1">第一讲</p>
              <p class="p2">组成细胞的元素</p>
              <p class="p3">09月07日&nbsp;周六&nbsp;18:30-20:45</p>
              <p class="p4">有回放</p>
            </li>
            <collapse>
              <div v-show="isActive">
                <li class="item">
                  <p class="p1">第一讲</p>
                  <p class="p2">组成细胞的元素</p>
                  <p class="p3">09月07日&nbsp;周六&nbsp;18:30-20:45</p>
                  <p class="p4">有回放</p>
                </li>
              </div>
            </collapse>
            <div class="toggle" @click="isActive = !isActive">查看全部大纲/收起大纲 ---</div>
          </ul>
          <div></div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import collapse from "./collapse.js";
export default {
  mounted() {
    this.course = JSON.parse(this.$route.query.course);
    console.log(this.course);
  },
  methods: {
    
      
    addToCart(course){
      this.$store.dispatch('addToCart',{course:course})
      alert('成功加入购物车')
    }
  },
  components: {
    collapse
  },
  data() {
    return {
      isActive: false,
      course: {}
    };
  }
};
</script>
<style lang='stylus' rel='stylesheet/stylus' scoped>
.container
  width 100%
  height 100%
  .Detail_wrap
    width 1200px
    margin 0 auto
    .title
      width 100%
      height 16px
      line-height 16px
      margin 10px 0
      a
        font-size 12px
        color #afafaf
        float left
      .icon
        display block
        width 29px
        height 16px
        padding 0 10px
        float left
      .team
        font-size 12px
        color #000000
    .main
      width 100%      
      background-color #fff      
      .content
        width 100%
        height 322px
        background-color #fff
        .course_card
          width 1158px
          height 100%
          background-color #fff
          border-radius 5px
          border 1px solid transparent
          padding 20px
          .card_title
            word-break break-all
            height 54px
            line-height 54px
            font-size 18px
            color #111
            overflow hidden
            text-overflow ellipsis
          .card-info
            font-size 14px
            margin 2px 0
            text-overflow ellipsis
            overflow hidden
            white-space nowrap
          .card_teacher
            margin-top 15px
            width 64px
            .teacher_avatar
              width 62px
              height 62px
              overflow hidden
              border-radius 50%
              font-size 0
              border 1px solid #f1f1f1
              position relative
              margin 5px 0
            .teacher_name
              text-align center
              color #666
              font-size 14px
              height 17px
              line-height 17px
              overflow hidden
          .card_border
            height 0
            overflow hidden
            margin 20px auto 12px
            border-top-color #e5e5e5
            border-top 1px solid #ddd
          .card_bottom
            height 41px
            position relative
            .card-bottom_price
              color #f13232
              position absolute
              top 50%
              left 0
              transform translateY(-50%)
              font-size 18px
              font-weight bold
            .card-bottom_num
              position absolute
              right 0
              top 50%
              transform translateY(-50%)
              font-size 13px
              height 16px
              line-height 16px
              color #999
    .openList
      width 100%
      margin-top 20px
      background-color #fff
      .listHeader
        height 60px
        background-color #fafafa
        font-size 26px
        line-height 60px
        text-align center
      .listContent
        width 100%
        .course
          height 30px
          font-size 20px
          padding-left 30px
          margin-top 30px
        .Listul
          width 100%
          .item
            width 100%
            height 34px
            margin-top 10px
            p
              display flex
              flex 4
              float left
              margin 0 95px
              height 34px
          .toggle
            height 20px
            font-size 18px
            line-height 20px
            text-align center
            cursor pointer
</style>