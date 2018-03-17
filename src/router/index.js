import Vue from 'vue'
import Router from 'vue-router'
import Layout from '@/pages/Layout' //布局
import notFound from '@/public/404'
import VideoDetails from '@/module/video/VideoDetails'  //课程列表
import LearnVideo from '@/pages/LearnVideo'             //课程首页
import VideoPlayer from '@/module/video/VideoPlayer'    //课程播放

import Linework from '@/pages/Linework'
import JobResource from '@/pages/JobResource'
import Caselibrary from '@/pages/Caselibrary'
import ExamAppraisal from '@/pages/ExamAppraisal'
import YunTest from '@/pages/YunTest'
import LearnReport from '@/pages/LearnReport'
import ExamTicket from '@/pages/ExamTicket'


Vue.use(Router)

export default new Router({
    routes: [{
        path: '/',
        name: 'layout',
        component: Layout,
        redirect: '/index',
        children: [{
            //首页
            path: '/index',
            name: 'index',
            component: LearnVideo
        }, {
            //视频
            path: '/video',
            name: 'VideoDetails',
            component: VideoDetails,    
        },{
            path: '/player',
            name: 'VideoPlayer',
            component: VideoPlayer, 
        },{
            //线上
            path: '/line',
            name: 'Linework',
            component: Linework,      
        },{
            //案例库
            path: '/case',
            name: 'Caselibrary',
            component: Caselibrary,  
             
        },{
            //考试测评
            path: '/appraisal',
            name: 'ExamAppraisal',
            component: ExamAppraisal, 
                 
        },{
            //云实验
            path: '/test',
            name: 'YunTest',
            component: YunTest,   
        },{
            //考试折扣
            path: '/ticket',
            name: 'ExamTicket',
            component: ExamTicket,   
        }
        ,{
            //学习报告
            path: '/report',
            name: 'LearnReport',
            component: LearnReport,   
        }
        ,{
            //职位
            path: '/job',
            name: 'JobResource',
            component: JobResource,    
        }
    ]
    }]
})
