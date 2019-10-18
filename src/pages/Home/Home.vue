<template>
  <div class="container">
    <Header />
    <Swiper />
    <div class="wrap">
      <ul class="course_nav">
        <li class="label">学科</li>
        <li class="nav_item" v-for="(item,index) in Course" :key="index">{{item.name}}</li>
      </ul>
      <div class="list_wrap">
        <ul class="list_content clearfix">
          <li class="one_category" v-for="(item,index) in Course" :key="index">
            <div
              class="course_card"
              v-for="(course,index) in item.courses"
              :key="index"
              @click="$router.push(`/CourseDetail?course=${JSON.stringify(course)}`)"
            >
              <div class="card_title">
                <span>{{course.courseName}}</span>
              </div>
              <div class="card-info">
                <i class="iconfont1 icon-lishi"></i>
                <span>{{course.courseTime}}</span>
              </div>
              <div class="card_teacher">
                <img class="teacher_avatar" :src="course.teachAvatar" alt />
                <div class="teacher_name">{{course.teachName}}</div>
              </div>
              <div class="card_border"></div>
              <div class="card_bottom">
                <div class="card-bottom_price">￥399</div>
                <div class="card-bottom_num">共4讲</div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex'
import Header from '../../components/Header/Header.vue'
import Swiper from '../../components/Swiper/Swiper.vue'
export default {
  components: {
    Header,
    Swiper
  },
  computed: {
    ...mapState({
      Course: state => state.Courselist.Course
    })
  },
  mounted() {
    this.$store.dispatch('getCourse')
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.container
  width 100%
  background-color #efefef
  .wrap
    width 1200px
    height 100%
    min-height 460px
    margin 0 auto
    margin-top 25px
    .course_nav
      width 100%
      height 50px
      margin 0 auto
      background-color #fff
      .label
        float left
        color #999
        font-weight 400
        text-align left
        min-width 48px
        height 100%
        line-height 50px
        margin-left 20px
      .nav_item
        padding 0 6px
        margin 0 6px
        height 50px
        line-height 50px
        float left
        color #333
        cursor pointer
        position relative
        margin-bottom 20px
    .list_wrap
      width 100%
      height 100%
      // background-color skyblue
    .list_content
      margin 0 auto
      // background-color skyblue
      zoom 1
      &::after
        display block
        content ''
        clear both
        visibility hidden
        height 0
      .course_title
        font-size 32px
        font-weight bold
        text-align left
      .one_category
        width 1230px
        float left
        // background-color #fff
        .course_card
          display inline-block
          cursor pointer
          width 330px
          border 1px solid #ddd
          background #fff
          border-radius 2px
          position relative
          transition all 0.2s linear
          padding 32px 27px 20px
          margin 10px 20px 5px 0px
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
              right 0
              transform translateY(-50%)
              font-size 18px
              font-weight bold
            .card-bottom_num
              position absolute
              left 0
              top 50%
              transform translateY(-50%)
              font-size 13px
              height 16px
              line-height 16px
              color #999
</style>