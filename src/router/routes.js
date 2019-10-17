import Home from '../pages/Home/Home.vue'
import Login from '../pages/Login/Login.vue'
import Personal from '../pages/Personal/Personal.vue'
import CourseList from '../pages/CourseList/CourseList.vue'
import CoourseDetail from '../pages/CourseDetail/CourseDetail.vue'
import SearchList from '../pages/SearchList/SearchList.vue'
import ShopCart from '../pages/ShopCart/ShopCart.vue'

export default[
  {
    path:'/home',
    component:Home    
  },
  {
    path:'/search',
    component:SearchList
  },
  {
    path:'/personal',
    component:Personal
  },
  {
    path:'/courseList',
    component:CourseList
  },
  {
    path:'/courseDetail',
    component:CoourseDetail
  },
  {
    path:'/shopcart',
    component:ShopCart
  },
  {
    path:'/login',
    component:Login
  },
  {
    path:'/',
    redirect: '/home'
  }

]