import Mock from 'mockjs'
import data from './data.json'
import chair from './coursedata.json'
Mock.mock('/allCourse',{code:0,data:data.allCourse})
Mock.mock('/allChair',{code:0,data:chair.courseChair}) 