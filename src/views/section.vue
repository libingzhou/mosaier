<template>
<div>
    <Head />
    <Lunbo />
    <section class="sec1">
        <div class="sec2">
            <div class="sec2-1">
                <h2 class="sec2-2">限时抢购</h2>
                <ul class="sec2-3 clearfix">
                    <li 
                        class="sec2-4"
                        v-for="(val,key) in ccc"
                    >
                        <img :src="val.wz" alt="">
                        <span class="sec2-6">抢购中</span>
                        <span class="sec2-7">{{djs}}</span>
                        <div class="sec2-8">
                            <div class="sec2-9">
                                <h3>{{val.js}}</h3>
                                <p>{{val.xj}}<s class="colorJ ml10">{{val.yj}}</s></p>
                                <router-link :to="'/xq/'+val.bid">立即抢购</router-link>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
        </div>   
        <div class="sec3"> 
            <div class="sec3-1">
                <h2 class="sec3-2">人气推荐
                    <span>有酒有肉才是人生</span>
                </h2>
                <ul class="sec3-3 clearfix">
                    <li 
                        v-for="(val,key) in ddd"
                    >
                        <div class="sec3-4">
                            <router-link :to="'/xq/'+val.bid">
                                <img :src="val.wz" alt="">
                            </router-link>
                        </div>
                        <h3>
                            <router-link :to="'/xq/'+val.bid" :title="val.js">{{val.js}}</router-link>
                        </h3> 
                        <h4>{{val.jss}}</h4>
                        <p>{{val.jg}}</p>
                    </li>
                </ul>
            </div>
        </div>
    </section>
    <section class="sec4-01">
        <div class="sec4 clearfix">
            <div class="sec4-1 clearfix">
                <div class="clearfix">
                    <h2 class="sec4-2 ">美酒
                        <span>觚觥交错杯杯尽，门前石狮口水流</span>
                    </h2>
                    <ul class="sec4-3 clearfix">
                        <li 
                            @mouseover="qh(key)"
                            v-for="(val,key) in bbb"
                            :class="{active:num == key}"

                        >{{val}}</li>
                    </ul>
                </div>
                <div>
                    <ul class="sec3-3 clearfix">
                        <li
                            v-for="(val,key) in eee"
                        >
                            <div class="sec3-4">
                                <router-link :to="'/xq/'+val.bid">
                                    <img :src="val.wz" alt="">
                                </router-link>
                            </div>
                            <h3>
                                <router-link :to="'/xq/'+val.bid" :title="val.js">{{val.js}}</router-link>
                            </h3> 
                            <h4>{{val.jss}}</h4>
                            <p>{{val.jg}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="more">
                <a href="">查看更多</a>
            </div>
        </div>
    </section>
    <section class="sec4-01">
        <div class="sec4 sec4-00 clearfix">
            <div class="sec4-1 clearfix">
                <div class="clearfix">
                    <h2 class="sec4-2 ">良食
                        <span>此味只应天上有，人间难得几回闻</span>
                    </h2>
                </div>
                <div>
                    <ul class="sec3-3 clearfix">
                        <li
                            v-for="(val,key) in fff"
                        >
                            <div class="sec3-4">
                                <router-link :to="'/xq/'+val.bid">
                                    <img :src="val.wz" alt="">
                                </router-link>
                            </div>
                            <h3>
                                <router-link :to="'/xq/'+val.bid" :title="val.js">{{val.js}}</router-link>
                            </h3> 
                            <h4>{{val.jss}}</h4>
                            <p>{{val.jg}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="more">
                <a href="">查看更多</a>
            </div>
        </div>
        
    </section>
    <section class="sec4-01">
        <div class="sec4 sec4-00 clearfix">
            <div class="sec4-1 clearfix">
                <div class="clearfix">
                    <h2 class="sec4-2 ">提货卡
                        <span>高端礼遇，馈赠佳品</span>
                    </h2>
                </div>
                <div>
                    <ul class="sec3-3 clearfix">
                        <li
                            v-for="(val,key) in ggg"
                        >
                            <div class="sec3-4">
                                <router-link :to="'/xq/'+val.bid">
                                    <img :src="val.wz" alt="">
                                </router-link>
                            </div>
                            <h3>
                                <router-link :to="'/xq/'+val.bid" :title="val.js">{{val.js}}</router-link>
                            </h3> 
                            <p>{{val.jg}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="more">
                <a href="">查看更多</a>
            </div>
        </div>
        
    </section>
    <section class="sec4-01">
        <div class="sec4 sec4-00 clearfix">
            <div class="sec4-1 clearfix">
                <div class="clearfix">
                    <h2 class="sec4-2 ">好物
                        <span>择一好物，享品质生活</span>
                    </h2>
                </div>
                <div>
                    <ul class="sec3-3 clearfix">
                        <li
                            v-for="(val,key) in hhh"
                        >
                            <div class="sec3-4">
                                <router-link :to="'/xq/'+val.bid">
                                    <img :src="val.wz" alt="">
                                </router-link>
                            </div>
                            <h3>
                                <router-link :to="'/xq/'+val.bid" :title="val.js">{{val.js}}</router-link>
                            </h3> 
                            <h4>{{val.jss}}</h4>
                            <p>{{val.jg}}</p>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="more">
                <a href="">查看更多</a>
            </div>
        </div>
        
    </section>
    <section class="sec5">
        <div class="sec4 sec5-1">
            <div class="sec5-2">
                <div>
                    <h2 class="sec5-3 ">烹饪美味
                        <span>跟着华为大厨烹制美食</span>
                    </h2>
                </div>
                <div>
                    <ul class="sec5-4 clearfix">
                        <li
                            v-for="(val,key) in ooo"
                        >
                            <div>
                                <a @click="show(val.bid)" class="sec5-8" href="javascript:">
                                    <span class="sec5-9 iconfont">&#xe601;</span>
                                    <img :src="val.wz" alt="">
                                </a>
                            </div>
                            <h3>{{val.lb}}</h3> 
                            <h4>{{val.js}}</h4>
                            <router-link :to="'/xq/'+val.bid" class="sec5-5" >浏览食材详情</router-link>
                            <a class="sec5-6" href="javascript:">加入购物车</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="more">
                <a href="">查看更多</a>
            </div>
        </div>
    </section>
    <section class="sec6 sec4-01">
        <div class="sec4 sec4-00 clearfix">
            <div class="sec4-1 clearfix">
                <div class="clearfix">
                    <h2 class="sec4-2 ">发现
                        <i class="sec4-22"></i>
                        梦想生活家
                        <span>他们热爱生活，勇于探索；他们遵从内心，从不将就；他们是梦想生活家。</span>
                    </h2>
                </div>
                <div>
                    <ul class="sec3-3 clearfix">
                        <li 
                            v-for="(val,key) in jjj"
                            :class="key==0?'sec3-33':'sec3-34'"
                        >
                            <div>
                                <a href="">
                                    <img :src="val.wz" alt="">
                                </a>
                            </div>
                            <h3>
                                <a href="" :title="val.lb">{{val.lb}}</a>
                            </h3> 
                            <h4>{{val.js}}</h4>
                            <span>
                                <img :src="val.tx" alt="">
                                <i>{{val.lz}}</i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="more">
                <a href="">查看更多</a>
            </div>
            <div class="videoo" :class="zzz?'hide':''">
                <div class="video3">
                    <div v-if="str" class="video1">
                        <i @click="fn" class="video2">×</i>
                        <video controls autoplay :src="vide"></video>
                    </div>
                </div>
            </div>      
        </div>
    </section>
    <Yc />
    <Botton />
</div>


</template>

<script>
import Head from './head';
import Botton from './botton';
import data from '../json/section.js';
import Lunbo from './lunbo';
import Yc from './yc'
export default {
    data(){
        return {
            zzz:true,
            aaa:'',
            bbb:'',
            num:0,
            ccc:'',
            ddd:'',
            eee:'',
            fff:'',
            ggg:'',
            hhh:'',
            ooo:'',
            cla:'sec3-33',
            jjj:'',
            str:false,
            djs:'',
            vide:'',
        }
    },
    components: {
        Lunbo,
        Head,
        Botton,
        Yc
    },
    created () {
        this.aaa = data.lb;
        this.bbb = data.jl;
        this.ccc = data.qg;
        this.ddd = data.rq;
        this.eee = data.mj[0];
        this.fff = data.ls;
        this.ggg = data.thk;
        this.hhh = data.hw;
        this.ooo = data.pr;
        this.jjj = data.fx;

        setInterval(this.clock,1000);
    },
    methods: {
        qh(key){
            this.num = key;
            this.eee = data.mj[key]
        },
        fn(){
            this.str = false;
            this.zzz = true;
        },
        show(id){
            this.zzz = false;
            this.str = true;
            this.vide = this.ooo.filter(e=>{return e.bid == id})[0].sp;
        },
        p(n){
            return n < 10 ? '0'+ n : n;  
        },
        clock(){
            //定义当前时间
            let startTime = new Date();
            //定义结束时间
            let endTime = new Date("2019/4/10 00:00:00");
            //算出中间差并且已毫秒数返回; 除以1000将毫秒数转化成秒数方便运算；
            let countDown = (endTime.getTime() - startTime.getTime())/1000;
            
            //获取天数 1天 = 24小时  1小时= 60分 1分 = 60秒
            let oDay = parseInt(countDown/(24*60*60));
            
            //获取小时数 
            //特别留意 %24 这是因为需要剔除掉整的天数;
            let oHours = parseInt(countDown/(60*60)%24);
            
            //获取分钟数
            //同理剔除掉分钟数
            let oMinutes = parseInt(countDown/60%60);
            
            //获取秒数
            //因为就是秒数  所以取得余数即可
            let oSeconds = parseInt(countDown%60);
            
            //下面就是插入到页面事先准备容器即可;

            this.djs = oDay + "天" + this.p(oHours) + ":" + this.p(oMinutes) + ":" + this.p(oSeconds);
            //7天 00:34:30
            //别忘记当时间为0的，要让其知道结束了;
            if(countDown < 0){
                this.djs = '到时间啦，抢购结束'
            }
        },

    }
}
</script>

<style>

</style>
