/**
* Created by fish on 2018/03/14
*/
<template>
<div>
     <p class="nav-bread">
        <a href="javascript:;">课程资源</a>
        <span>&gt</span>
        <a href="javascript:;">课程名称</a>
    </p>
    <div class="player-video">
        <div class="col-md-9">
            <video src=""></video>
        </div>
        <div class="col-md-3">
            <div class="video-list">
                <p class="title">课程视频</p>
                <div class="yun-course-videolis">
                    <ul class="lesson-data scrollbar">
                        <li>
                            <a href="">1-1 协议</a>
                            <span>[播放中]</span>
                        </li>
                    </ul>
                </div>
            </div>
            
        </div>
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
                cid: "",
                token: "",
                vid: "",
                videoMessage: []
			}
        },
        components:{
          
        },
        mounted(){
            this.cid = this.$route.query.cid;
            this.vid = this.$route.query.index;
            this.token = this.$route.query.token;
            this.getPlayerDada();
        },
        methods: {
            getPlayerDada(index){
                
                axios.get('http://proxy.xqq888.com/yun/course/course_info', {
                    params: {
                        cid : this.cid,
                        vid : this.vid,
                        token : this.token
                    }
                })
                .then((response)=> {
                    
                    this.videoMessage = response.data
                    console.log(this.videoMessage)
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
    .player-video { background-color: #333333; overflow: hidden;}
    .video-list { padding: 0 5px;}
    .video-list .title { color: #FFF; font-size: 16px; padding: 20px;}
    .yun-course-videolis { background-color: #272626; min-height: 480px;} 
    .lesson-data { overflow: auto;}
    .yun-course-videolis ul { margin: 0px; padding: 0px; height: 450px;}
    .yun-course-videolis li { padding: 8px 20px;}
    .yun-course-videolis li a { color: #FFF;  cursor: pointer;}
    .yun-course-videolis li a:hover { color: #CCC;}
    .yun-course-videolis li span { color: #FF0000;}
</style>
