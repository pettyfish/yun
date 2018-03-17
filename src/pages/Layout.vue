<template>
  <div>
    <nav-header></nav-header>
      <school-data></school-data>
        <div class="container">
            <div>
                <ul class="label-tag">
                  <router-link
                    v-for="({ label, path }, index) in allTag"
                    tag="li"
                    :class="{'cur': pirceChecked === index}"
                    :key="path"
                    
                    :to="path">
                    <span @click="pirceChecked = index">{{label}}</span>
                  </router-link>
                </ul>
            </div>
        </div>
        <div class="container">
          <router-view></router-view>
        </div>

        <nav-footer></nav-footer>
    </div>
</template>

<script>
// 引入模块
import NavHeader from './../public/NavHeader.vue'
import SchoolData from './../public/Schooldata.vue'
import NavFooter from './../public/Navfooter.vue'

export default {
    // 组建件名称
    name: '',
    // 返回数据
    data () {
        return {
            allTag:[    //标题栏导航
                {
                    label:'课程资源',
                    path:'/index'
                },
                {
                    label:'在线课程',
                    path:'/line'
                },
                {
                    label:'案例库',
                    path:'/case'
                },
                {
                    label:'考试测评',
                    path:'/appraisal'
                },
                {
                    label:'云端实验室',
                    path:'/test'
                },
                {
                    label:'考试折扣券',
                    path:'/ticket'
                },
                {
                    label:'学习报告',
                    path:'/report'
                },
                {
                    label:'就业资源',
                    path:'/job'
                }
            ],
            currentTab: 'LearnVideo', // currentTab 用于标识当前触发的子组件
            pirceChecked: 0,  //导航栏默认下标
        }
    },
    // 所需组件
    components:{
        NavHeader, //头部导航条
        SchoolData, //学校信息
        NavFooter //底部信息
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

/* 标题栏导航 */
.label-tag { background-color: aqua;}
.label-tag li { float: left; font-size: 16px; border-bottom: 3px solid transparent;}
.label-tag li span { display: inline-block; padding:10px 20px; cursor:pointer;}
.label-tag li:hover { border-bottom: 3px solid #ff3333; background-color: #f7f7f7; }
.label-tag .cur { border-bottom: 3px solid #ff3333; background-color: #f7f7f7;}



</style>
    