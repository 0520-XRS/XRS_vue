<template>
  <div class="app">
    <!-- 图片 -->
    <div class="login_wrap">      
      <!-- 表单 -->
      <div class="info-left">
        <!-- 表头验证码登录 -->
        <div class="info-input">
          <div class="tab-phone">验证码登录</div>
        </div>
        <!-- 第一个 -->
        <div class="phon-login">
          <!-- +86 -->
          <div class="form-content">{{num}}</div>
          <!-- 图 -->
          <transition name="fade">
            <img @click="isTop=!isTop" src="./img/02.png" alt />
          </transition>
          <div class="input-hr"></div>
          <!-- 手机号 -->
          <input
            type="text"
            class="input-phone-text"
            placeholder="请输入手机号"
            maxlength="11"
            v-model="phone"
            name="phone"
            v-validate="'required|phone2'"
          />
          <span
            style="color:red"
            v-show="errors.has('phone')"
            class="help is-danger"
          >{{ errors.first('phone') }}</span>
          <!-- 下拉框 -->
          <div class="select-list" v-show="isTop">
            <div class="select-list-item" @click="numTo('+86')">
              <span class="selsct-name">中国</span>
              <span class="select-code">+86</span>
            </div>
            <div class="select-list-item" @click="numTo('+852')">
              <span class="selsct-name">香港</span>
              <span class="select-code">+852</span>
            </div>
          </div>
        </div>
        <!-- 第二个 -->
        <div class="code-input">
          <input
            type="text"
            placeholder="请输入验证码"
            maxlength="6"
            v-model="code"
            name="code"
            v-validate="'required|code2'"
          />
          <span
            style="color:red"
            v-show="errors.has('code')"
            class="helps is-danger"
          >{{ errors.first('code') }}</span>
          <div
            class="code-btn"
            :disabled="computedTime>0"
            :class="{right:isRightPhone}"
            @click.prevent="sendCode"
          >{{computedTime>0?`已发送(${computedTime}s)`:`获取验证码`}}</div>
        </div>
        <!-- 第三个 -->
        <div class="input-btn">
          <span class="input-btn-text" :class="{isright:loginPhone}" @click="submit">登录</span>
        </div>
        <!-- 第四个 -->
        <div class="login">
          登录后即代表你已阅读并同意
          <p>《用户协议》《隐私协议》</p>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { reqSendCode} from '../../api'
import {Toast,MessageBox} from 'mint-ui'
export default {
  data() {
    return {
      phone: "", // 存储手机号
      code: "", // 验证码
      computedTime: 0, //计算倒计时
      isTop: false, // 图标
      num: "+86" //默认为+86
    };
  },
  // 计算手机正则
  computed: {
    isRightPhone() {
      // 验证手机号
      return /^1\d{10}$/.test(this.phone);
    },
    // 验证码正则
    loginPhone() {
      // console.log(/\d{6}/.test(this.code));
      return /\d{6}/.test(this.code);
    },
    canSubmit() {
      return this.isRightPhone && this.loginPhone && this.computedTime < 1;
    }
  },
  // 发送验证码
  methods: {
    // 发送验证码清除定时器
    async sendCode() {
      if (this.isRightPhone && this.computedTime < 1) {
        this.computedTime = 10;
        this.timeId = setInterval(() => {
          this.computedTime--;
          if (this.computedTime <= 0) {
            this.computedTime = 0;
            // 清除定时器
            clearInterval(this.timeId);
          }
        }, 1000);
      // 发送验证码
      const result = await reqSendCode(this.phone)
      if (result.code === 0) {
        // 断言
        Toast('发送成功')
      } else {
        MessageBox.alert('发送失败')
        // 定时器归0
        this.computedTime = 0
        // 清理定时器
        // clearInterval(this.timeId)
      }

      }
    },
    numTo(num) {
      // console.log(num);
      this.num = num;
      this.isTop = false;
    },
    // goto(path) {
    //   // this.phone = phone;
    //   // console.log(this.phone);
    //   this.$router.replace(path);
    // },
    // 定义一个方法  解决不输入手机号就可以跳转
    submit() {
      let isValidPhone = false;
      isValidPhone = this.isRightPhone;
      let isValidCode = false;
      isValidCode = this.loginPhone;
      if (!isValidPhone) {
        throw new Error("手机号不对");
      } else if (!isValidCode) {
        throw new Error("验证码不对");
      } else {
        this.$router.replace("/Home");
      }
    }
    // if(submit)
  }
};
</script>


<style lang="stylus" rel="stylesheet/stylus">
.app
  width 100%
  height 100%
  background-image url('./img/bgc_login.png')
  background-repeat no-repeat
  .login_wrap
    width 1200px
    height 100%
    margin 0 auto
    
    .info-left
      float right       
      width 420px
      height 436px
      margin-top 400px     
      background-color #ffffff
      border-radius 8px 8px 16px 16px
      padding-top 60px
      transform translateY(-50%)      
      .info-input
        position relative
        margin 0 150px
        .tab-phone
          line-height 24px
          height 24px
          color #212831
          font-size 24px
          cursor pointer
      .phon-login
        width 300px
        height 38px
        border 1px solid #f9f9fc
        background-color #f9f9fc
        border-radius 20px
        position absolute
        top 135px
        left 60px
        .form-content
          font-size 14px
          color #212831
          line-height 38px
          position absolute
          left 20px
        img
          display inline-block
          width 20px
          height 20px
          position absolute
          left 52px
          top 8px
          cursor pointer
        .input-hr
          border-left 1px solid #dddddd
          height 22px
          position absolute
          left 80px
          top 8px
        .input-phone-text
          font-size 14px
          position absolute
          right 5px
          outline 0
          height 38px
          background-color rgba(0, 0, 0, 0)
        .help
          position absolute
          top 45px
          left 85px
        .select-list
          width 300px
          height 90px
          position absolute
          top 42px
          z-index 10000
          border-radius 20px
          background-color #ffffff
          box-shadow 0 2px 6px 0 rgba(0, 0, 0, 0.1)
          .select-list-item
            width 100%
            height 50%
            position relative
            .selsct-name
              position absolute
              left 25px
              top 15px
              color #000
            .select-code
              position absolute
              right 15px
              top 15px
      .code-input
        width 300px
        height 38px
        border 1px solid #f9f9fc
        background-color #f9f9fc
        border-radius 20px
        position absolute
        top 220px
        left 60px
        .helps
          position absolute
          top 45px
          left 85px
        input
          font-size 14px
          height 38px
          position absolute
          left 10px
          outline 0
        .code-btn
          position absolute
          right 30px
          top 12px
          font-size 12px
          color #858c96
          outline 0
          cursor pointer
          &.right
            color black
      .input-btn
        width 300px
        height 38px
        border 1px solid #f9f9fc
        background-color #f9f9fc
        border-radius 20px
        position absolute
        top 310px
        left 60px
        cursor pointer
        .input-btn-text
          width 300px
          height 38px
          position absolute
          left 120px
          top 12px
          color rgba(173, 180, 190, 0.4)
          &.isright
            color black
      .login
        position absolute
        bottom 45px
        left 100px
        color #858c96
        text-align center
        p
          margin-top 8px
          color red
          font-size 14px
          cursor pointer
</style>
