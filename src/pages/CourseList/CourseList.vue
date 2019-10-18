<template>
  <div id="app">
    <Header />

    <!--导航版块-->
    <!-- <div class="header">
      <div class="top-header"></div>
      <div class="buttom-header"></div>
    </div>-->
    <!--联动版块-->
    <div class="linkage">
      <div class="linkage-title">
        <span>
          <a href="javascript:;" @click="$router.push('/home')">首页</a>
        </span>
        <span>></span>
        <span>听讲座</span>
      </div>

      <div class="linkage-content">
        <div class="linkage-content-bottom">
          <div class="linkage-content-title">学科</div>
          <ul>
            <!-- <li>
                <a  class="left"  href="javascript:;">全部</a>
            </li>-->
            <li
              v-for="(item,index) in Chair"
              :key="index"
              ref="index"
              @click="clickHander(index)"
              :class="isshow?'left':'left active'"
            >
              <a href="javascript:;">{{item.name}}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <!--选项卡版块-->
    <div class="Control">
      <div class="Control-title">
        <span>系列讲座</span>
      </div>
      <div class="Control-content"></div>
    </div>
    <!--List页面-->
    <div class="library">
      <ul class="list-ul" v-for="(itme,index) in Chair" :key="index">
        <li class="list-li" v-for="(list,index) in itme.chairitem" :key="index">
          <img :src="list.image" />
          <div class="text">
            <p class="text1">{{list.title}}</p>
            <p class="text2">{{list.month}}</p>
            <p class="text3">{{list.order}}</p>
            <el-button class="btn1">全部系列讲座</el-button>
            <!-- <el-button :plain="true" @click="open2(list)" class="btn2 active">立即预约</el-button> -->
            <el-button
              :plain="true"
              @click="open2(list,index)"
              ref='btns'
              :disabled="isdisabled?true:false"
              :class="isclick?'active':''">  {{isclick?'已预约':'立即预约'}} </el-button>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      isshow: true,
      islist: false,
      isclick: false,
      isdisabled: false
    };
  },
  name: "CourseList",
  computed: {
    ...mapState({
      Chair: state => state.Chairs.Chair
    })
  },
  mounted() {
    this.$store.dispatch("getChair");
  },
  methods: {
    open2(list,index) {
      this.$message({
        showClose: true,
        message: "您已成功预约！",
        type: "success",
        duration: "1000"
      });
      const all = this.$refs["btns"];
      const res = this.$refs["btns"][index];
      console.log(res)
      // if (res.className !== " ") {
      //   res.className = " ";
      //   // this.isclick = !this.isclick;
      //   // this.isdisabled = !this.isdisabled;
      // } else {
      //   for (let i = 0; i < all.length; i++) {
      //     all[i].className = " ";
      //   }
      //   res.className = "active";
        
      // }


      
      

      this.$store.dispatch("open2", { list: list });
    },
    // open2(list) {
    //   this.$message("您已成功预约！", "提示信息", {
    //     confirmButtonText: "确定"
    //   });

    //   this.$router.push(`/Personal?list=${JSON.stringify(list)}`);
    // },
    clickHander(index) {
      const all = this.$refs["index"];
      const res = this.$refs["index"][index];
      if (res.className !== "left") {
        res.className = "left";
      } else {
        for (let i = 0; i < all.length; i++) {
          all[i].className = "left";
        }
        res.className = "left active";
      }
    },
    selectchangeclass(curindex, curtopindex, index, topindex) {
      if (curindex === index && topindex == curtopindex) {
        return true;
      }
    },
    changebgcolor3(item, index, topindex) {
      this.curindex = index;
      this.curtopindex = topindex;
    }
  }
};
</script>
<style lang="stylus" rel="stylesheet/stylus">
#app
  height 1000px
  background-color #f5f5f5
  .header
    // height 100%
    .top-header
      width 100%
      height 30px
      background-color #333
    .buttom-header
      width 100%
      height 100px
      background-color #fff
      border 1px solid #00bce4
  .linkage
    width 1200px
    margin 0 auto
    .linkage-title
      width 100%
      height 15px
      padding 10px 0
      span
        margin-right 10px
        font-size 14px
        a:hover
          color red
    .linkage-content
      width 1200px
      height 50px
      font-size 14px
      margin 15px auto
      background-color #fff
      .linkage-content-bottom
        margin-left 30px
        height 50px
        padding-top 10px
        .linkage-content-title
          float left
          height 30px
          line-height 30px
        .left
          float left
          padding 0 7px
          margin-left 10px
          height 30px
          line-height 30px
          display inline-block
          &.active
            background-color red
            color #fefefe
            border-radius 5px
            a
              color #fff
  .Control
    width 1200px
    margin 0 auto
    .Control-title
      width 1200px
      border-bottom 2px solid #333
    span
      display block
      width 70px
      height 40px
      padding 0 10px
      font-size 15px
      background-color #333
      text-align center
      vertical-align middle
      line-height 40px
      border-bottom 2px solid #333
      color #fefefe
      background-color #333
      cursor pointer
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
        img
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
          cursor default
          color #fff
          background-color #c1c1c1
          border 1px solid #c1c1c1
        .active:hover
          border 1px solid #c1c1c1
</style>