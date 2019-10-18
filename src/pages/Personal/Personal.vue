<template>
  <div>
    <Header />
    <div class="content">
      <div class="title">已预约的课程</div>
      <!--List页面-->
      <div class="library">
        <ul class="list-ul">
          <li class="list-li">
            <!-- <img class="tupian" :src="list.image" alt /> -->
            <div class="text">
              <div class="library">
                <ul class="list-ul">
                  <li class="list-li" v-for="(list,index) in CourseLists" :key="index">
                    <img
                      style="width: 295px;height: 159px;border-radius: 5px 5px 0 0"
                      :src="list.image"
                    />
                    <div class="text">
                      <p class="text1">{{list.title}}</p>
                      <p class="text2">{{list.month}}</p>
                      <p class="text3">{{list.order}}</p>
                      <!-- <el-button class="btn1">全部系列讲座</el-button>
            <el-button
              :plain="true"
              @click="open2(list)"
              :disabled="isdisabled?true:false"
              :class="isclick?'active':''"
                      >{{isclick?'已预约':'立即预约'}}</el-button>-->
                      <!-- <button class="btn2 active">已预约</button> -->
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>

<!-- 
    .personal-header
  width 100%
  height 150px
  background-color #02a774
  margin 20px 0
  line-height 150px
  color red
  img
    width 50px
    height 50px
    border-radius 50%
    margin-left 50px
    background-color #fff
    vertical-align middle
  span
    vertical-align middle
    margin-left 20px
  .goCar
    width 100px
    height 30px
    margin-left 500px
    color red
    border-radius 10px
    font-size 14px
    display inline-block
    text-align center
    cursor pointer
    background-color #fff
    border 1px solid #dedede -->
  </div>
</template>
<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      list: {}
    }
  },
  methods: {},
  computed: {
    ...mapState({
      CourseLists: state => state.Courselist.CourseLists
    })
  },
  mounted() {
    this.list = JSON.parse(this.$route.query.list)
  }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
.content
  width 1200px
  margin 0 auto
  .title
    width 200px
    height 30px
    font-size 20px
    line-height 30px
    background-color #333
    color white
    padding-left 20px
    box-sizing border-box
  .library
    width 1200px
    margin 0 auto
    .list-ul
      width 100%
      float left
      margin-top 15px
      .list-li
        width 25%
        margin-top 10px
        float left
        // img
        // width 290px
        // height 159px
        // border-radius 5px 5px 0 0
        .text
          width 290px
          height 150px
          margin-top -10px
          background-color #fefefe
          .library
            width 1200px
            margin 0 auto
            .list-ul
              width 100%
              height 100%
              float left
              margin-top 15px
              .list-li
                width 25%
                margin-top 10px
                float left
                .tupian
                  width 290px
                  height 159px
                  border-radius 5px 5px 0 0
                .text
                  width 290px
                  height 150px
                  margin-top -10px
                  background-color #fefefe
                .text1
                  width 270px
                  overflow hidden
                  white-space nowrap
                  text-overflow ellipsis
                  font-size 16px
                  padding-top 20px
                  margin-left 12px
                  text-align center
                .text2
                  font-size 14px
                  color #999
                  line-height 20px
                  margin-left 12px
                  margin-top 10px
                .text3
                  font-size 14px
                  color #999
                  line-height 20px
                  margin-left 12px
                  margin-bottom 10px
                .btn1
                  margin 0 18px
                .btn1:hover
                  border 1px solid #409EFF
                  .el-button
                    line-height 10px
                .btn2:hover
                  border 1px solid #409EFF
                .active
                  width 89px
                  cursor default
                  color #fff
                  background-color #c1c1c1
                  border 1px solid #c1c1c1
                .active:hover
                  border 1px solid #c1c1c1
</style>