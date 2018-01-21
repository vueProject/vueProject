<template>
    <div>
        <input class="form-control" id="inputEmail3" placeholder="请输入账号" v-model="userName">
        <input type="password" class="form-control" id="inputPassword3" placeholder="请输入密码" v-model="password">
        <button type="submit" class="btn btn-default" @click="login">登录</button>
    </div>
</template>

<script>
    export default {
    data() {
        return {
            userName : '',
            password : ''
        }
    },
    methods:{
      login() {
        // 获取已有账号密码
        let params = {
              userName : this.userName,
              password : this.password
            };
        this.$http.post('/api/data/getData', params)
          .then((response) => {
            // 响应成功回调
            if(response.data === "") {
                console.log(response)
                alert('账号或密码错误');
                return;
            }
            console.log(response.data);
            alert("登陆成功");
            // 创建一个账号密码
            // return this.$http.post('/api/login/createAccount',params);
          })
          .catch((reject) => {
            console.log(reject)
          });
        }
      }
    }
</script>
