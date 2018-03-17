/**
* Created by fish on 2018/03/09
**/

<template>
    <div>
        <h3 class="types-title">
            <span>我&nbsp的&nbsp课&nbsp程</span>
            <a href="javascript: void(0);" class="all-link">所有课程</a>
        </h3>
        <ul class="lesson-list">
            <router-link
                tag="li"
                class="col-md-3"
                v-for="(item,cid) in lessonList"
                :key="cid"
                :to="{path: '/video',query: { cid, token }}">
                <div class="lesson-every">
                    <div class="pic">
                        <a href="#"><img v-lazy="item.imgurl" alt=""></a>
                    </div>
                    <div class="main">
                        <div class="name"><a href="javascript:;">{{item.title}}</a></div>
                        <div class="btn-area">
                            <a href="javascript:;" class="pull-right btn-f">{{item.title == 1? "已开通":"未开通"}}</a>
                        </div>
                    </div>
                </div>
            </router-link>
        </ul>
    </div>
</template>

<script>
    // 引入vueajax
    import axios from 'axios';

    export default {
        name: 'learn-video',
        data() {
            return {
            token: "008e6a65003c3c2fc6857b550c15ebd2",
            lessonList: [],   //初始课程数据
            page : 1,         //默认初始页数
            pagesZise : 12,   //显示课程数量
            sortFlag : 1,
            lessonnum: ''
			}
        },
        components: {},
        //生命周期函数，拿到数据调用
        mounted(){
            this.getLessonList();
        },
        methods: {
            getLessonList(){ //获取全部课程
                var param = {
                    page : this.page,
                    pagesZise : this.pagesZise,
                    sort : this.sortFlag
                }
                axios.post(
                    'http://proxy.xqq888.com/yun/course/course_all'
                ).then((result) => {
                    this.lessonList =result.data.courses;
                   
                }).catch(error => {

                });
            },
            
        }
    }
</script>

<style scoped>
    /* 全部课程信息 */
    .types-title { margin: 20px 0; text-align: center; font-size: 18px; font-weight: 600; color: #4D555D; position: relative; }
    .types-title .all-link { position: absolute; right: 0; font-size: 14px; font-weight: 500;}
    .lesson-list { margin-left: -5px;}
    .lesson-every { padding: 0 5px; margin-bottom: 10px; overflow: hidden;}
    .lesson-every .pic img { width: 100%; max-height: 9rem; border-radius: 5px; }
    .lesson-every .pic img:hover { transform: scale(.95); -webkit-transform: scale(.95); -o-transform: scale(.95);}
    .lesson-every .main .name { margin-top: 5px; margin-bottom: 10px; overflow: hidden; text-overflow:ellipsis;white-space: nowrap; }
    .lesson-every .main .btn-f { color: #ff3333; }
</style>
