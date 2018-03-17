/**
* Created by fish on 2018/03/14
*/
<template>
    <div class="container">
        <p class="nav-bread">
            <a href="javascript:;">课程资源</a>
            <span>&gt</span>
            <a href="javascript:;">课程名称</a>
        </p>
        <div class="video-content">
            <div class="col-md-8 video-photo">
                <img alt=""  v-bind:src="imgurl">
            </div>
            <div class="col-md-4 ">
                <div class="video-text">
                    <h3 class="name">{{title}}</h3>
                    <p class="num">课程数量：<span>{{video_num}}</span>节</p>
                    <a class="begin" href="javascript:;">开始学习</a>
                </div>
                
            </div>
        </div>
        <div class="lesson-catalogue">
            <p class="title"><span>课程目录</span></p>
            
            <ul class="catalogue-num">
                <!-- <router-link
                    v-for="(item,vid) in lessonData"
                    class="col-md-6"
                    tag="li"
                    :to="{path: '/player',query: { vid, cid, token  }}">
                
                <div class="num">
                    <img src="./../../assets/img/video-play-r.png" alt="">
                    <a href="">{{item.title}}</a>
                </div>
                </router-link> -->
                
            </ul>
            
        </div>
    </div>
</template>

<script>
    import NavHeader from './../../public/NavHeader.vue'
    import SchoolData from './../../public/Schooldata.vue'
    import NavFooter from './../../public/Navfooter.vue'
    // 引入vueajax
    import axios from 'axios';

    export default {
        data() {
            return {
                lessonData:{},
                title: '',
                video_num: '',
                id: "",
                token: "",
                imgurl:""
                
			}
        },
        components:{
            NavHeader, //头部导航条
            SchoolData, //学校信息
            NavFooter, //底部信息
        },
        mounted(){
            this.cid = this.$route.query.cid;
            this.token = this.$route.query.token;
            this.getLessonDada();
        },
        methods: {
            getLessonDada(index){
                
                axios.get('http://proxy.xqq888.com/yun/course/course_info', {
                    params: {
                        cid : this.cid,
                        token : this.token
                    }
                })
                .then((response)=> {
                    console.log(response)
                    this.video_num=response.data.course.video_num
                    this.title=response.data.course.title
                    this.imgurl=response.data.course.imgurl
                    this.lessonData = response.data.videos

                    console.log(this.lessonData)
                    
                })
                .catch(function (error) {
                    console.log(error);
                });
            }
           
        }
      
    }
</script>

<style scoped>
    .nav-bread { background-color: #F5F5FA; padding: 10px;}
    .video-content { overflow: hidden; height: 22rem; }
    .video-content .video-photo { height: 100%; }
    .video-content .video-photo img { width: 100%;height: 100%; }
    .video-content .video-text { padding: 30px;}
    .video-content .name { font-size: 18px;}
    .video-content .num { margin: 30px 0;}
    .video-content .begin { padding: .5em 2em; color: #FFFFFF; background-color:  #ff3333; border-radius: 5px; border: 1px solid #ff3333;}
    .lesson-catalogue .title { display: block; border-bottom: 1px solid #ddd; }
    .lesson-catalogue .title span {    color: #555;
    cursor: default;
    background-color: #fff;
    display: inline-block;
    padding: 15px 20px;
    border: none;
    border-bottom: 2px solid #FF3333; }
    .lesson-catalogue .catalogue-num{ padding: 20px 0px; margin: 0 -10px;}
    .lesson-catalogue .catalogue-num li{ }
    .lesson-catalogue .catalogue-num li .num{ margin: 0 10px;  background-color: #F1F1F1;margin-bottom: 10px;  line-height: 50px; padding: 0 10px; height: 50px;}
</style>
