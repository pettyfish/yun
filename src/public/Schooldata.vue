<template>
    <div>
        <div class="container">
            <div class="user-data">
                <img class="user-show" src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=3147280463,1317445922&fm=27&gp=0.jpg" alt="">
                <div class="user-school">
                    <span><img src="https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2840343464,3869226641&fm=111&gp=0.jpg" alt=""></span>
                    <span>复旦大学</span>
                </div>
                <div class="user-class overflow">
                    <span>复旦一班</span>
                    <span>当前设置：</span>
                    <span>修改状态</span>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
  name: ''
}
</script>
<style scoped>
/* 个人信息css */
    .user-data { width: 100%; position: relative;}
    .user-show { width: 100%; height: 100%; max-height: 18rem;}
    .user-school { position: absolute; bottom: 10px; left: 10px;}
    .user-school img { max-height: 5rem; max-width: 5rem; vertical-align: bottom; }
    .user-class { position: absolute; bottom: 10px; right: 10px;}

</style>