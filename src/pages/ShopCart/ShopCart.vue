<template>
  <div class="containers">
    <Header />
    <div class="content">
      <ul class="cart-list">
        <!-- 单个表 -->
        <li class="cart-item" v-for="(item,index) in courseItem" :key="index">
          <!-- 左边的勾选框 -->
          <div class="cart-item-left">
            <!-- <input type="checkbox" :checked="isChecked?'checked':''" /> -->
            <img :src="item.teachAvatar" alt />
          </div>
          <!-- 右边的内容框 -->
          <div class="cart-item-right">
            <!-- 主体 -->
            <div class="item-right-top">
              <div class="all" v-show="!iscart">
                <div class="first">
                  <p class="span2">{{item.courseName}}</p>                  
                </div>
                <div class="second">
                  <div class="teacher-info">专属老师:<span>{{item.teachName}}</span>  </div>
                  <div class="courseTime">{{item.courseTime}}</div>
                </div>
                <div class="third">
                  <p>{{item.coursePrice}}</p>
                  <el-button class="btn1" @click="deleteCart(index)">删除</el-button>
                </div>
              </div>              
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data() {
    return {
      shop: {},
      iscart: false
    }
  },
  computed: {
    ...mapState({
      courseItem: state => state.CourseDetail.courseInfos
    })
  },
  mounted() {
    this.shop = JSON.parse(this.$route.query.course)
    console.log(this.shop)
  },
  methods: {
    deleteCart(index) {
      this.courseItem.splice(index, 1)
      // this.iscart = !this.iscart
    }
  }
}
</script>
<style lang='stylus' rel='stylesheet/stylus' >
.containers
  width 100%
  // height 100%
  // background-color #eee
  .content
    width 1200px
    margin 0 auto
    margin-top 20px
    .cart-list
      width 100%
      .cart-item
        width 100%
        height 190px
        margin-top 20px
        background-color #fff
        .cart-item-left
          width 190px
          height 190px
          text-align center
          float left
          img
            width 160px
            height 160px
            margin 15px
            border-radius 50%
            background-color #ffc0cb
            border 1px solid #eee
        .cart-item-right
          float left
          width 1000px
          height 190px
          .item-right-top
            width 100%
            height 160px
            margin 15px auto            
            .all
              width 100%
              padding-bottom 10px
              border-bottom 1px solid #eee
              .first
                width 100%
                .span1
                  font-size 12px
                  color #f13232
                  padding 2px
                  border 1px solid #f13232
                .span2
                  font-size 24px            
              .second
                width 100%
                zoom 1
                &::after
                  display block
                  content ''
                  clear both
                  visibility hidden
                  height 0
                .teacher-info
                  float left
                  width 20%                  
                  font-size 18px
                  color #333                           
                  padding-left  20px 
                  margin-top 30px
                .courseTime
                  float left
                  font-size 14px
                  margin-top 30px                
              .third                
                width 100%
                zoom 1
                &::after
                  display block
                  content ''
                  clear both
                  visibility hidden
                  height 0                  
                p
                  float left
                  font-size 20px
                  font-weight 700
                  color red
                  padding 40px 0 0 20px
                .btn1
                  float right  
                  margin 20px 20px 0 0
          
</style>