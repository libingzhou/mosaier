<template>
<div>
    <Head />
    <div class="ttab">
        <div class="tab">
            <div>
                <p>
                    <img src="https://www.huaweimossel.com/public/images/1d/8c/1b/90ccb8f888b8b9115b8414d06cdcee6bf846e7fd.jpg?1542160154#w" width="1920" height="370" alt="">
                </p>
            </div>
        </div>
    </div>
    <div 
        class="ttab2-0"
        v-for="(val1,key) in aaa"
    >
        <div class="ttab2">
            <h2>{{val1.lb}}</h2>
            <h3></h3>
            <p>{{val1.js}}</p>
        </div>
        <ul class="ttab2-1">
            <li v-for="(val,key) in val1.sj"> <!-- ttab2-2 -->
                <router-link :to="'/xq/'+val.bid" class="ttab2-2">
                    <img :src="val.dz" alt="">
                    <span>点击购买</span>
                </router-link>
                <router-link :to="'/xq/'+val.bid" :title="val.mz">{{val.mz}}</router-link>
                <p>{{val.js}}</p>
                <h3>{{val.jg}}元</h3>
            </li>           
        </ul>
    </div>
    <Botton />
    <Yc />
</div>


</template>
<script>
import data from '../json/ls.js'
import Head from '../views/head';
import Botton from '../views/botton';
import Yc from '../views/yc';
export default {
    data(){
        return {
            aaa:'',
        }
    }, 
    created () {
        this.aaa = data.ls;
        let a = this.$route.params.mz;
        if(a){
            if(a === '生鲜'){
                document.documentElement.scrollTop = 500;
            }else if(a === '米油'){
                document.documentElement.scrollTop = 1858;
            }else if(a === '零食'){
                document.documentElement.scrollTop = 2820;
            }else{
                document.documentElement.scrollTop = 3750;
            }
        }else{
            document.documentElement.scrollTop = 0;
        }
    },
    components: {
        Head,
        Botton,
        Yc
    },
    watch:{
        $route(){
            if(this.$route.params.mz === '生鲜'){
                document.documentElement.scrollTop = 500;
            }else if(this.$route.params.mz === '米油'){
                document.documentElement.scrollTop = 1858;
            }else if(this.$route.params.mz === '零食'){
                document.documentElement.scrollTop = 2820;
            }else if(this.$route.params.mz === '茗茶'){
                document.documentElement.scrollTop = 3750;
            }
        }
    }
}
</script>
