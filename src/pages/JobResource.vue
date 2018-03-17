<template>
    <div>
        <h1>全部职位</h1>
        <ul class="all-job">
            <li class="col-md-6" v-for="(item,index) in jobData">
                <div class="job-list">
                    <div class="job-list-data">
                        <div class="col-md-8">
                            <p class="name">{{item.position_name}}<span class="money">6000-8000元/月</span></p>
                            <p class="company">{{item.member_id}}</p>
                            <p class="wew">
                                <span><i></i>北京</span>
                                <span><i></i>本科</span>
                                <span><i></i>1个月前</span>
                            </p>
                        </div>   
                        <div class="col-md-4">
                            <a href="">已收藏</a>
                            <a href="">已投递</a>
                        </div>
                    </div>
                    
                </div>
            </li>
             
        </ul>
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: '',
    data () {
        return {
            token: "008e6a65003c3c2fc6857b550c15ebd2",
            jobData: [],
            
        }
    },
    mounted(){
        this.init();   
        
    },created (){

    },
    methods: {
        init(){
            axios.get("http://proxy.xqq888.com/yun/position/position_list",{
                params: {
                    token : this.token
                }
            }).then((response)=>{
                let res = response.data;
                this.jobData = res;
            });
        }
        
    }
}
</script>
<style scoped>
    .all-job { margin: 0 -10px;}
    .job-list { margin-bottom: 10px; padding: 0 10px;}
    .job-list-data { border: 1px solid #E4E4E4; padding: 15px; overflow: hidden;}
    .job-list-data .company { margin: 10px 0; color: #666666; }
    .job-list-data .money { margin: 0 10px; color: #ff3333; }
    
    
    
</style>