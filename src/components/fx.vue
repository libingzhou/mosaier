<template>
    <div>
        <Head />
        <div>
            <div>
                <div>
                    <p>
                        <img src="https://www.huaweimossel.com/public/images/0e/71/df/54f1c21fe5350d54d14bbaa5fa20788f515cd5c8.jpg?1488791886#w" width="1920" height="370" alt="">
                    </p>
                </div>
            </div>
            <div class="fx">
                <div class="fx1 clearfix">
                    <h2>
                        <span>烹饪美味</span> 
                        <p>跟着华为大厨烹制美食</p>
                        <p class="fx2">更多视频敬请期待</p>
                    </h2>
                </div>
                <dd>
                    <dl>
                        <h1>TIPS:</h1>
                        <P>品质良食不可辜，</P>
                        <P>购买的健康放心食材，用其来制造美味,</P>
                        <P>华为J4餐厅御用大厨，教你如何烹制美食。</P>
                    </dl>
                    <dt class="sec5-4 clearfix">
                        <li
                            v-for="(val,key) in aaa"
                            class="fx3"
                        >
                            <div>
                                <a 
                                    class="sec5-8" 
                                    href="javascript:"
                                    @click="show(val.bid)"
                                >
                                    <span class="sec5-9 iconfont">&#xe601;</span>
                                    <img :src="val.wz" alt="">
                                </a>
                            </div>
                            <h3>{{val.lb}}</h3> 
                            <h4>{{val.js}}</h4>
                             <router-link :to="'/xq/'+val.bid" class="sec5-5" >浏览食材详情</router-link>
                            <a class="sec5-6" href="">加入购物车</a>
                        </li>
                    </dt>
                </dd>
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
        <Botton />
        <Yc />
    </div>
</template>

<script>
import Head from '../views/head';
import Botton from '../views/botton';
import data from '../json/section.js';
import Yc from '../views/yc'
export default {
    data(){
        return {
            aaa:'',
            zzz:true,
            vide:'',
        }
    },
    created () {
        this.aaa = data.pr;
    },
    components: {
        Head,
        Botton,
        Yc
    },
    methods:{
        fn(){
            this.str = false;
            this.zzz = true;
        },
        show(id){
            this.zzz = false;
            this.str = true;
            this.vide = this.aaa.filter(e=>{return e.bid == id})[0].sp;
        },
    }
}
</script>

<style>

</style>
