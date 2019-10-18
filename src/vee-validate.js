// 引入Vue
import Vue from 'vue'
import VeeValidate from 'vee-validate'
import zh_CN from 'vee-validate/dist/locale/zh_CN'
// 声明使用
Vue.use(VeeValidate)

VeeValidate.Validator.localize('zh_CN', {
  messages: zh_CN.messages,
  // 属性的提示信息
  attributes: {
    phone: '手机号码',
    code:'验证码'
  }
})

VeeValidate.Validator.extend('phone2', {
  getMessage: (field) => `请输入正确的`+field,
  validate: (value) => {
    return /[1]\d{10}/.test(value)
  }
});
VeeValidate.Validator.extend('code2', {
  getMessage: (field) => `请输入正确的`+field,
  validate: (value) => {
    return /\d{6}/.test(value)
  }
});
