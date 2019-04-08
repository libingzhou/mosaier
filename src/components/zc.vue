<template>
  <div>
    <header class="hd">
      <a class="hd1" href="/">
        <img src="https://www.huaweimossel.com/themes/mossel/images/img/logo-min.png" alt>
      </a>
      <h3>欢迎注册</h3>
      <p>
        已有账号，请
        <a href="/dl">登录</a>>
      </p>
    </header>
    <section class="zc0-1">
      <div class="zc0-0">
        <div class="zc1 clearfix">
          <ul>
            <li>
              <input ref="input1" v-model="aaa" type="text" placeholder="注册账号">
            </li>
            <li>
              <input v-model="bbb" type="password" placeholder="请输入密码，6-20个字符">
            </li>
            <li>
              <a class="zc6" 
                @click="bl"
                href="javascript:">注册并登陆</a>
            </li>
            <li class="zc8">
              <input v-model="ccc" type="checkbox" class="zc7">
              同意
              <a href>会员注册协议</a>和
              <a href>隐私保护政策</a>
            </li>
          </ul>
        </div>
      </div>
    </section>
    <Bt/>
  </div>
</template>

<script>
import Bt from "./bt";
export default {
    data() {
        return {
            aaa: "",
            bbb: "",
            ccc:true,
        };
    },
    created () {
        if(sessionStorage.getItem('ID')){
            alert('您已登录');
            this.$router.push({path:'/'});
        }
    },
    components: {
        Bt
    },
    methods: {
        bl(){
            let obj = {
              act:'search',
              name:this.aaa,
              id:this.bbb
            }
            this.$get('http://localhost/animal?',{...obj})
            .then((res)=>{
              console.log(res);
              if(res.code == 1){
                alert('用户名已存在');
                this.$refs.input1.focus();
              }else{
                alert('注册成功')
                sessionStorage.setItem('ID',this.aaa);
                this.$router.push({path:'/'});
              }
            })
            // fetch('http://localhost/animal?'+new URLSearchParams(obj).toString())
            //     // .then(d=>d.json())
            //     .then(d=>d.text())
            //     .then(e =>{
            //       console.log(e);
            //         if(JSON.parse(e).code == 1){
            //             alert('用户名已存在');
            //             this.$refs.input1.focus();
            //         }else{
                        // alert('注册成功')
                        // sessionStorage.setItem('ID',this.aaa);
                        // this.$router.push({path:'/'});
            //         }
            //     });
            }
    }
};
</script>

<style>
</style>
