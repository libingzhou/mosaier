<template>
    <div class="zc">
        <header class="hd">
            <a class="hd1" href="/"><img src="https://www.huaweimossel.com/themes/mossel/images/img/logo-min.png" alt=""></a>
            <h3>欢迎注册</h3>
            <p>还没有账号，请<a href="/zc">注册</a>></p>
        </header>
        <section class="sc">
            <div class="sc1">
                <div class="sc2">
                    <p>动态登录</p>
                    <i>|</i>
                    <p class="on">账号登录</p>
                </div>
                <div class="sc3">
                    <input 
                        v-model="aaa" 
                        type="text"     
                        placeholder="用户名/邮箱/手机号"
                    >
                    <input 
                        @keyup.13="enter" 
                        v-model="bbb" 
                        type="password" 
                        placeholder="密码"
                    >
                </div>
                <div class="sc4">
                    <input type="checkbox">
                    <span>两周内自动登录</span>
                    <a href="">忘记密码</a>
                </div>
                <div class="sc5">
                    <a @click="enter" class="sc5-1">登录</a>
                    <a class="sc5-2" href="./zc">注册</a>
                </div>
            </div>
        </section>
        <Bt />
    </div>
</template>

<script>
import Bt from './bt.vue'
import data from '../json/xq.js'
export default {
    data () {
        return {
            aaa:'',
            bbb:'',      
        }
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
        enter(){
             let obj1 = {
                act:'enter',
                name:this.aaa,
                id:this.bbb,
            }
            fetch('http://localhost/animal?'+new URLSearchParams(obj1).toString())
                // .then(d=>d.json())
                .then(d=>d.text())
                .then(e =>{
                    if(JSON.parse(e).code == 0){
                        sessionStorage.setItem('ID',this.aaa);
                        let obj = [];
                        JSON.parse(e).data[0].datum.forEach(e=>{
                            data.xq.forEach(d=>{
                                if(e.bid == d.bid){
                                    d.num = e.num;
                                    obj.push(d);
                                }
                            })
                        })
                        console.log(obj);
                        console.log(JSON.parse(e).data[0].datum)
                        if(JSON.parse(e).data[0].datum.length){
                            sessionStorage.setItem('name',JSON.stringify(obj));
                        }
                        alert('登录成功');
                        // this.$router.push({path:'/'});
                    }else{
                        alert('账号或密码错误')
                    }
                });
            }
        }
    }

</script>

<style>

</style>
