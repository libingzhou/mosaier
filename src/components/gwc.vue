<template>
    <div>
        <Head />
        <section class="gwc1">
            <div class="gwc">
                您当前的位置:
                <span>购物车</span>
            </div>
            <div class="gwc2">
                <dl>
                    <dt>
                        <p class="p1">
                            <input @click="checkall" type="checkbox" v-model="ccc">全选
                        </p>
                        <p class="p2">商品名称</p>
                        <p>单价(元)</p>
                        <p>数量</p>
                        <p>小计(元)</p>
                        <p>操作</p>
                    </dt>
                    <dd v-for="(val,key) in aaa">
                        <p class="p1">
                            <input type="checkbox" v-model="val.inp">
                        </p>
                        <p class="p2">
                            <a href="">
                                <img :src="val.wz" alt="">
                                <span>{{val.js}}</span>
                            </a>
                        </p>
                        <p>￥{{val.jg}}</p>
                        <p class="p3">
                            <input :id="val.bid" @blur="bl" type="text" :value="val.num">
                            <i><img :id="val.bid" @click="add" class="add" src="../img/增加.png" alt=""></i>
                            <i><img :id="val.bid" @click="reduc" class="minus" src="../img/减少.png" alt=""></i>
                        </p>
                        <p class="p4">{{val.jg*val.num}}元</p>
                        <p class="p5">
                            <i><img :id="val.bid" @click="remove(val.bid)" src="../img/关 闭.png" alt=""></i>
                        </p>
                    </dd>
                </dl>
                <div class="gwc3">
                    <a href="/">
                        <i>‹</i>继续购物
                    </a>
                    <a href="" class="gwc3-1">清空购物车</a>
                    <button class="gwc3-2">去结算</button>
                    <p>合计(不含运费)
                        <span>￥{{bbb}}.00</span>
                    </p>
                </div>
            </div>
        </section>
        <Botton />
        <Yc />
    </div>
</template>

<script>
import Head from '../views/head';
import Botton from '../views/botton';
import Yc from '../views/yc';
import {mapState, mapMutations, mapGetters} from 'vuex'
export default {
    data(){
        return{
            aaa:[],
            eee:'',
            arr:'',
            ccc:true,
            ddd:[],
        } 
    },
    components: {
        Head,
        Botton,
        Yc
    },

    watch: {
        aaa:{
            handler(){
                if(this.aaa.length){
                    this.ccc = this.aaa.every(e=>{
                        return e.inp == true;
                    });
                }else{
                    this.ccc = false;
                }
            },
            deep: true
        },
        ddd:{
            handler(){
                this.ccc = this.ddd.every(e=>{
                   return e == true;
                }); 
                console.log(this.aaa);
            }
        },
    },
    computed:{
        ...mapState(['goods']),
        bbb:function(){
            this.eee = 0;
            for (let i = 0; i < this.aaa.length; i++) {
                if(this.aaa[i].inp){
                    this.eee += this.aaa[i].jg*this.aaa[i].num;
                }
            }
            return this.eee;
        }
    },
    created(){
        if(JSON.parse(sessionStorage.getItem("name"))){
            this.aaa = JSON.parse(sessionStorage.getItem("name"));
        }
        if(this.aaa.length){
            console.log(1);
            this.aaa.forEach(e=>{
                this.ddd.push(e.inp);
                // this.bbb = e.jg*e.num;
            });
        }else{
            this.ccc = false;
        }
        this.shop();
        if(!sessionStorage.getItem('ID')){
            alert('请先登录');
            this.$router.push({path:'/dl'});
        }
    },
    filters: {
        numm(val,num){
            // console.log(val)
            return val*num;
        },
    },
    methods:{
        add(event){
            console.log(event.target.id);
            this.aaa.forEach(e=>{
                if(e.bid === event.target.id){
                    e.num++;
                }
            });
            this.$store.commit({
                type:'adds',
                a:this.aaa,
            });
        },
        reduc(event){
            this.aaa.forEach(e=>{
                if(e.bid === event.target.id){
                    if(e.num>1){
                        e.num--;
                    }
                }
            });
            this.$store.commit({
                type:'adds',
                a:this.aaa,
            });
        },
        bl(event){
            this.aaa.forEach(e=>{
                if(e.bid === event.target.id){
                    if(event.target.value > 0){
                        e.num = event.target.value; 
                    }else{
                        alert('最少为1件');
                        e.num = 1;
                    }
                }
            })
        },
        remove(id){
            this.aaa = this.aaa.filter(e=>{return e.bid != id});
            this.$store.commit({
                type:'adds',
                a:this.aaa,
            });
        },
        checkall(){
            this.ccc = !this.ccc;
            this.aaa.map(e=>{
                e.inp = this.ccc;
            })
        },
        shop(){
            this.$store.commit({
                type:'adds',
                a:JSON.parse(sessionStorage.getItem("name")),
            });
        },
    },
}
</script>

<style scoped>
.add{
    cursor:pointer;
}
.minus{
    cursor:pointer;
}
</style>
