<template>
  <div id="head">
    <div id="head-msg0">
        <div id="head-msg">
            <div id="head-msg1">
                <img src="https://www.huaweimossel.com/themes/mossel/widgets/topbar_member/images/msg.gif" alt="">
                <a href="">寻找年度锦鲤！快来清空你的购物车！</a>
            </div>
            <div id="head-msg2">
                <ul>
                    <li><a v-show="_show" href="/dl" class="register">登录</a></li>
                    <li><a v-show="_show" href="/zc">注册</a></li>
                    <li><a href="/gwc">
                        <i></i>购物车(<b class="red">{{goods.length}}</b>)
                        </a>
                    </li>
                    <li><a href="" class="convert">提货卡兑换</a></li>
                    <li>关注我们</li>
                    <li v-show="eee" class="logout" @click="logout">退出登录</li>
                    <a href="" class="microblog">
                        <img src="./img/微博.png" alt="">
                        <img class="microblog1" src="https://www.huaweimossel.com/themes/mossel/widgets/topbar_member/images/wechat.png" alt="">
                    </a>
                    <a href="" class="wechat">
                        <img src="./img/微信.png" alt="">
                        <img class="wechat1" src="https://www.huaweimossel.com/themes/mossel/widgets/topbar_member/images/weibo.png" alt="">
                    </a>
                </ul>
            </div>
        </div>
    </div>

    <div class="head-mid clearfix">
        <div class="head-mid1 clearfix">
            <img class="head-mid001" src="https://www.huaweimossel.com/public/images/2e/3c/c6/1752e1dbe133f4ef2391b382d82f578b406fa0b3.png?1517277060#w" alt="">
        </div>
        <input class="head-input" v-model="searchVal" type="text" placeholder="请输入您要搜索的内容...">
        <img @click="search()" class="seek" src="./img/搜索.png" alt="">
    </div>
    <div class="head-nav0" :class="onoff?'fixed':''">
        <ul  class="head-nav clearfix">
            <li>
                <router-link to="/">首页</router-link>
            </li>
            <li class="head0">
                <router-link to="/mj">美酒</router-link>
                <div class="head1">
                    <div class="head1-1">
                        <div class="head1-2">
                            <h3>国家</h3>
                            <img src="./img/国家.png" alt="">
                            <p>
                                <router-link 
                                    v-for="(val,key) in ddd"
                                    :to="'/mj/'+val"
                                >{{val}}</router-link>
                            </p>
                        </div>
                        <div class="head1-3">
                            <h3>类型</h3>
                            <a 
                                href=""
                                v-for="(val,key) in aaa"
                            >
                                <img :src="val.wz" alt="">
                                {{val.lx}}
                            </a>
                        </div>
                    </div>
                </div>
            </li>

            <li class="head0">
                <router-link to="/ls">良食</router-link>
                <div class="head1">
                    <p class="head1-1 head1-01">
                        <router-link
                            v-for="(val,key) in bbb"
                            :to="'/ls/'+val.lx"
                        >
                            <img :src="val.wz" alt="">
                            <span>{{val.lx}}</span>
                        </router-link>
                    </p>
                </div>
            </li>
            <li><router-link to="/thk">提货卡</router-link></li>
            <li><a href="">好物</a></li>
            <li class="head0">
                <router-link to="/fx">发现</router-link>
                <div class="head1">
                    <p class="head6-6  head1-1 head1-01">
                        <router-link to="/fx">
                            <img src="./img/视频.png" alt="">
                            <span>视频</span>
                        </router-link>
                    </p>
                </div>
            </li>
            <li><a href="https://sale.huaweimossel.com/xinghui/v1.html?trk=010_09">幸HUI</a></li>
            <li><a href="">小莫说</a></li>
            <li class="head0">
                <a href="">MOSSEL</a>
                <div class="head1">
                    <p class="head1-02 head1-1 head1-01">
                        <a 
                            href=""
                            v-for="(val,key) in ccc"
                        >
                            <img :src="val.wz" alt="">
                            <span>{{val.lx}}</span>
                        </a>              
                    </p>
                </div>
            </li>
        </ul>
    </div>
  </div>
</template>

<script>
import data from '../json/head.js';
import date from '../json/xq.js';
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
    data(){
        return {
            aaa:'',
            bbb:'',
            ccc:'',
            ddd:'',
            searchs:[],
            searchVal:'',
            eee:'',
            onoff:false,
            _show:'',
        }
    },
    created () {
        this.aaa = data.data;
        this.bbb = data.ls;
        this.ccc = data.ms;
        this.ddd = data.gj;

        if(JSON.parse(sessionStorage.getItem("name"))){
            this.goods.length = JSON.parse(sessionStorage.getItem("name")).length;
        }else{
            sessionStorage.setItem("name",JSON.stringify([]))
        }
        if(!sessionStorage.getItem('ID')){
            this.eee = false;
            this._show = true;
            console.log(111)
        }else{
            this.eee =true;
            this._show = false;
            console.log(222)
        }
    },
    mounted () {
        window.addEventListener('scroll',this.handleScroll);
    },
    methods:{
        handleScroll () {
            let scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
            if(scrollTop>150){
                this.onoff = true;
            }else{
                this.onoff = false;
            }
        },
        search(){
            for (let i = 0; i < date.xq.length; i++) {
                if(date.xq[i].js.indexOf(this.searchVal) != -1){
                    this.searchs.push(date.xq[i].bid);
                }
            }
            console.log(this.searchs);
            this.$router.push({
                path: '/ss',
                // name: 'mallList',
                query: {
                    search: this.searchs,
                }
            })
        },
        logout(){
            sessionStorage.removeItem("ID");
            sessionStorage.removeItem("name");
            alert('退出成功');
            this.eee = false;
            this._show = true;
            this.$router.push({path:'/'});
            this.goods.length=0;
        }
    },
    watch:{
        searchVal:function(){
            this.searchVal.trim();
        },
    },
    computed:{
        ...mapState(['goods']),
    },
}
</script>

