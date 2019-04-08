<template>
<div>
  <Head />
  <div class="ttab">
    <div class="tab">
      <div>
        <p>
          <img src="https://www.huaweimossel.com/public/images/af/0e/db/a52818a6fd70427c4aad99f9b9f31aa7b3ee4b57.jpg?1546849191#w" width="1920" height="370" alt="">
        </p>
      </div>
      <div class="tab-0">
        <dl>
          <dt>国家</dt>
          <dd><span :class="eee?'reds':''" @click="state('全部')">全部</span></dd>
          <dd v-for="(val,key) in aaa">
            <span :class="val.f?'':'reds'" @click="state(val)">{{val.t}}</span>
          </dd>
        </dl>
        <dl>
          <dt>类型</dt>
          <dd><span :class="fff?'reds':''" @click="type('全部')">全部</span></dd>
          <dd v-for="(val,key) in bbb">
            <span :class="val.f?'':'reds'" @click="type(val)">{{val.t}}</span>
          </dd>
        </dl>
        <dl>
          <dt>其他</dt>
          <dd><span :class="ggg?'reds':''" @click="rest('全部')">全部</span></dd>
          <dd v-for="(val,key) in ccc">
            <span :class="val.f?'':'reds'" @click="rest(val)">{{val.t}}</span>
          </dd>
        </dl>
      </div>
    </div>
    <div class="tab1 clearfix">
      <div class="tab1-1">
        <ul>
          <li>
            <span>综合</span>
          </li>
          <li>
            <span class="sort" @click="cost">价格<span v-show="desc">↑</span><span v-show="!desc">↓</span></span>
          </li>
          <li>
            <span class="sort" @click="volume">销量<span v-show="asc">↑</span><span v-show="!asc">↓</span></span>
          </li>
        </ul>
      </div>
      <div class="tab2">
        <ul>
          <li v-for="(val,key) in ddd">
            <div class="pic">
              <router-link :to="'/xq/'+val.bid"><img :src="val.wz" width="265" height="265" alt=""></router-link>
            </div>
            <div class="pic1">
              <a href="javascript:">
                <img :src="val.wz" alt="">
              </a>
            </div>
            <div class="pic2">
              <a href="" :title="val.js">{{val.js}}</a>
              <p>{{val.jss}}</p>
              <p class="pic3">
              <i>{{val.jg}}元</i>
              </p>
            </div>
            <div class="pic4">
              <span @click="fn(val)">加入购物车</span>
            </div>
          </li>
          </li>
        </ul>
      </div>
    </div>
  </div>
  <Botton />
  <Yc />
</div>
</template>

<script>
import data from '../json/mj.js'
import Head from '../views/head';
import Botton from '../views/botton';
import Yc from '../views/yc';
export default {
  data(){
    return {
      aaa:'',
      bbb:'',
      ccc:'',
      ddd:'',
      eee:true,
      fff:true,
      ggg:true,
      arr1:'',
      arr2:'',
      uuu:['','',''],
      desc:true,
      asc:true,
      arr:['全部','全部','全部'],
    }
  },
  created () {
    this.aaa = data.gj;
    this.bbb = data.lx;
    this.ccc = data.qt;
    this.ddd = data.xq;
  },
  components: {
    Head,
    Botton,
    Yc
  },
  methods:{
    fn(a){
        a.num = 1;
        this.$store.commit({
            type:'add',
            a:a,
        });
        alert('添加成功');
    },
    state(val){
      if(val == '全部'){
        this.eee = true;
        this.arr.splice(0,1,val);
      }else{
        console.log(val);
        this.arr.splice(0,1,val.t);
        this.eee = false;
      }
      this.aaa.forEach(e=>{
        if(e.t == val.t){
          e.f = false;
        }else
        {
          e.f = true;
        }
      })
    },
    type(val){
      if(val == '全部'){
        this.fff = true;
        this.arr.splice(1,1,val);
      }else{
        console.log(val);
        this.arr.splice(1,1,val.t);
        this.fff = false;
      }
      this.bbb.forEach(e=>{
        if(e.t == val.t){
          e.f = false;
        }else{
          e.f = true;
        }
      })
      
   
    },
    rest(val){
      if(val == '全部'){
        this.ggg = true;
        this.arr.splice(2,1,val);
      }else{
        console.log(val);
        this.arr.splice(2,1,val.t);
        this.ggg = false;
      }
      this.ccc.forEach(e=>{
        if(e.t == val.t){
          e.f = false;
        }else{
          e.f = true;
        }
      })
    
    },
    states(){
      if(this.uuu[1] && this.uuu[2]){
        this.ddd = data.xq.filter(e=>{return e.lx == this.uuu[1]}).filter(e=>{return e.zh == this.uuu[2]})
      }else if(this.uuu[1]){
        this.ddd = data.xq.filter(e=>{return e.lx == this.uuu[1]});
      }else if(this.uuu[2]){
        this.ddd = data.xq.filter(e=>{return e.zh == this.uuu[2]});
      }else{
        this.ddd = data.xq;
      }
      this.eee = true;
      this.aaa.forEach(e=>{
        e.f = true;
      })
    },
    types(){
      if(this.uuu[0] && this.uuu[2]){
          this.ddd = data.xq.filter(e=>{return e.gj == this.uuu[0]}).filter(e=>{return e.zh == this.uuu[2]})
        }else if(this.uuu[0]){
          this.ddd = data.xq.filter(e=>{return e.gj == this.uuu[0]});
        }else if(this.uuu[2]){
          this.ddd = data.xq.filter(e=>{return e.zh == this.uuu[2]});
        }else{
          this.ddd = data.xq;
      }
      this.fff = true;
      this.bbb.forEach(e=>{
        e.f = true;
      })
    },
    rests(){
        if(this.uuu[0] && this.uuu[1]){
          this.ddd = data.xq.filter(e=>{return e.gj == this.uuu[0]}).filter(e=>{return e.lx == this.uuu[1]})
        }else if(this.uuu[0]){
          this.ddd = data.xq.filter(e=>{return e.gj == this.uuu[0]});
        }else if(this.uuu[1]){
          this.ddd = data.xq.filter(e=>{return e.lx == this.uuu[1]});
        }else{
          this.ddd = data.xq;
      }
      this.ggg = true;
      this.ccc.forEach(e=>{
        e.f = true;
      })
    },
    compare(value){
        return function(a,b){
            let value1 = a[value];
            let value2 = b[value];
            return value2 - value1;
        }
    },
    cost(){
      this.desc = !this.desc;
      if(this.desc){
        this.ddd.reverse();
      }else{
        this.ddd.sort(this.compare('jg'))
      }
    },
    volume(){
      this.asc = !this.asc;
      if(this.asc){
        this.ddd.reverse();
      }else{
        this.ddd.sort(this.compare('xl'))
      }
    }
  },
  // computed:{
  //   shopList(){
  //     return
  //   }
  // },
  watch: {
    arr:{
      handler(){
        if(this.arr[0] == '全部'){
          this.ddd = data.xq;
        }else{
          this.ddd = data.xq.filter(d=>{
            return d.gj == this.arr[0];
          })
        }
        if(this.arr[1] == '全部'){
          this.ddd = this.ddd.filter(d=>{
            return d.lx != this.arr[1];
          })
        }else{
          this.ddd = this.ddd.filter(d=>{
            return d.lx == this.arr[1];
          })
        }
        if(this.arr[2] == '全部'){
          this.ddd = this.ddd.filter(d=>{
            return d.zh != this.arr[2];
          })
        }else{
          this.ddd = this.ddd.filter(d=>{
            return d.zh == this.arr[2];
          })
        }
      },
    }, 
    deep:true
  }
}
</script>

<style>

</style>
