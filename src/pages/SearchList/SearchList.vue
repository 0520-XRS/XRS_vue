<template>
  <div class="searchList-wraper">
    <Header />
    <div class="searchList-body" >
      <div class="course_search">
        <div class="breadcrumb">
          <span class="breadcrumb_all">全部结果>&nbsp;</span>
          <span class="breadcrumb_keyWord">化学</span>
        </div>
        <div class="select_row">
          <div class="label">学科</div>
          <div class="row_content">
            <span class="select_btn">全部</span>
            <span class="select_btn">语文</span>
            <span class="select_btn">数学</span>
            <span class="select_btn">化学</span>
          </div>
        </div>
      </div>
      <div class="course_list">
        <a href="javascript:;" class="course_card" v-for="(courseInfo,index) in Course" :key="index" >
          <p class="card_title">
            <span class="card_title_icon">英语</span>
            <span>【寒假目标清北班】高三英语2轮复习（上）直播班（全国）</span>
          </p>
          <div class="card-info">
            <i class="iconfont1 icon-lishi"></i>
            <span>一期：1月20日-1月23日每天07:30-11:30</span>
          </div>
          <div class="card_teacher">
            <img
              class="teacher_avatar"
              src="https://ekt.xesimg.com/teacher/2018/08/09/15338096592710.png"
              alt
            />
            <div class="teacher_name">冯水经</div>
          </div>
          <div class="card_border"></div>
          <div class="card_bottom">
            <div class="card-bottom_price">￥399</div>
            <div class="card-bottom_num">共4讲</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>
<script>
// import axios from 'axios'
import { mapState } from 'vuex'
export default {
  async mounted() {
    const res = await this.$store.dispatch('getCourse')
  },
  // 获取vuex中state中存储的状态数据
  computed:{
    ...mapState({
      Course:state=>state.Courselist.Course      
    })
    
  }
 
}
</script>
<style lang="stylus" rel="stylesheet/stylus" >
.searchList-wraper
  width 100%
  height 100%
  .searchList-body
    width 1200px
    height 100%
    margin 0 auto
    padding 10px
    background-color #eee
    // 搜索面包屑+学科分类
    .course_search
      background #fff
      padding 10px
      margin-bottom 30px
      font-size 13px
      .breadcrumb
        max-width 100%
        padding-bottom 16px
        position relative
        .breadcrumb_all
          display inline-block
          line-height 22px
          vertical-align middle
          margin-top 16px
          color #999
        .breadcrumb_keyWord
          display inline-block
          height 22px
          line-height 22px
          vertical-align middle
          margin-top 16px
      .select_row
        min-height 12px
        line-height 12px
        position relative
        font-size 12px
        .label
          float left
          color #999
          font-weight 400
          text-align left
          min-width 48px
        .row_content
          display inline-block
          position relative
          max-width 1074px
          vertical-align top
          .select_btn
            padding 0 6px
            margin 0 6px
            line-height 12px
            display inline-block
            color #333
            cursor pointer
            position relative
            margin-bottom 20px
    // 课程列表
    .course_list
      width 100%
      // 课程卡片
      .course_card
        display inline-block
        cursor pointer
        width 330px
        background #fff
        border-radius 2px
        position relative
        transition all 0.2s linear
        padding 32px 27px 20px
        .card_title
          word-break break-all
          height 54px
          line-height 1.42857143
          font-size 18px
          color #111
          overflow hidden
          text-overflow ellipsis
          .card_title_icon
            color #f13232
            border 1px solid #f13232
            min-width 18px
            text-align center
            font-size 14px
            padding 2px
            font-weight 400
            border-radius 2px
            display inline-block
            margin-right 4px
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
            font-size 16px
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