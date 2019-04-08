<template>
    <div>
        <Head />
        <section class="Xq">
            <div class="xq">
                <div class="xq4">
                    <h2>{{a.js}}</h2>
                </div>
                <!-- 商品相册 -->
                <div class="xq1">
                    <div class="xq2">
                        <ul>
                            <li 
                                v-for="(val,key) in c"
                                @mouseover="qh(val)"                            
                            >
                                <a href="">
                                    <img :src="val" alt="">
                                </a>
                            </li>
                            
                        </ul>
                    </div>
                    <div class="xq3">
                        <img :src="a.wz" alt="">
                    </div>
                </div>
                <!-- 商品信息 -->
                <div class="xq5">
                    <div class="xq6">
                        <div>
                            <p class="xq6-1">{{a.js}}</p>
                            <p class="xq6-2">
                                <i>包邮</i>
                                {{a.jss}}
                            </p>
                        </div>
                    </div>
                    <!-- 商品价格 -->
                    <div class="xq7">
                        <p class="xq7-1">价格<span><i>{{a.jg}}</i>元</span></p>
                        <p class="xq7-2">数量
                            <input type="text" v-model="b">
                            <img class="xq8-1" @click="ad" src="../img/增加.png" alt="">
                            <img @click="redu" class="xq7-3" src="../img/减少.png" alt="">
                        </p>
                    </div>
                    <!-- 购买按钮 -->
                    <div class="xq8">
                        <button @click="shop(a,b)" class="xq8-1">加入购物车</button>
                        <button class="xq8-2">立即购买</button>
                    </div>
                </div>
            </div>
            <div class="xq9">
                <ul>
                    <li class="cur">详情描述</li>
                    <li>常见问题</li>
                </ul>
            </div>
            <div class="xq10">
                <h2>规格参数</h2>
                <div>
                    <dl v-for="(val,key) in d">
                        <dt>{{val.dt}}</dt>
                        <dd>{{val.dd}}</dd>
                    </dl>
                </div>
            </div>
            <!-- 详情描述 -->
            <div class="xq11">
                <img v-for="(val,key) in e" :src="val" alt=""> 
            </div>
            <!-- 常见问题 -->
            <div class="xq12">
                <h2>常见问题</h2>
                <p>关于配送</p>
                <p>生鲜类产品采用顺丰冷链配送，请您收货后立即放入冰箱冷冻保存； </p>
                <p>葡萄酒采用顺丰陆运配送，由于酒类属于特殊商品，根据相关规定无法空运，只能通过陆运配送，一般3～4个工作日可以到达。</p>
                <p>关于退换货</p>
                <p>生鲜类及酒类产品属特殊商品，无质量问题不接受7天无理由退换货。</p>
                <p>官网所有商品默认开具电子发票，可自行下载打印。如需开具纸质发票，可联系在线客服处理。</p>
                <p>根据国家税法规定，提货卡属预付卡为零税率，只能开具增值税普通发票。</p>
                <p>包含不同组合的提货卡发票内容为“预付卡”，其余产品都根据所购买的商品依照明细开具。</p>
            </div>
        </section>
        <Botton />
    </div>
</template>

<script>
import Head from '../views/head';
import Botton from '../views/botton';
import data from '../json/xq.js';
import {mapState, mapMutations, mapGetters} from 'vuex';
export default {
    name:'xq',
    created () {
        let a = this.$route.params.bid;
        this.a = data.xq.find(e=>{
            return e.bid === a;
        })
        this.c = this.a.xqimg;
        this.d = this.a.xqms;
        this.e = this.a.xqs;
        window.screenTop = '0px';
    },
    data () {
        return {
            a:'',
            b:1,
            c:'',
            d:'',
            e:'',
        }
    },
    components: {
        Head,
        Botton,
    },
    methods:{
        shop(a,b){
            a.num = b;
            this.$store.commit({
                type:'add',
                a:a,
            });
            let arr = this.goods.map(e=>{return {bid:e.bid,num:e.num}})
            let obj = {
                act:'update',
                name:sessionStorage.getItem("ID"),
                update:JSON.stringify({datum:arr})
            }
            this.$get('http://localhost/animal?',{...obj})
            .then((res)=>{
                console.log(res);
                if(res.code == 0){
                alert('添加成功')
            }})
            // fetch('http://localhost/animal?'+new URLSearchParams(obj).toString())
            //     .then(d=>d.json())
            //     .then(e =>{
            //         alert('添加成功');
            //         console.log(e);
            //     });
        },
        ad(){
            this.b++;
        },
        redu(){
            if(this.b>1){
                this.b--;
            }
        },
        qh(val){
            console.log(val)
            this.a.wz = val;
        }
    },
    computed:{
        ...mapState(['goods']),
    },



}
</script>

<style>

</style>
