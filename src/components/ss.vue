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
          <dd v-for="(val,key) in aaa">
            <a href="">{{val.t}}</a>
          </dd>
        </dl>
        <dl>
          <dt>类型</dt>
          <dd v-for="(val,key) in bbb">
            <a href="">{{val.t}}</a>
          </dd>
        </dl>
        <dl>
          <dt>其他</dt>
          <dd v-for="(val,key) in ccc">
            <a href="">{{val.t}}</a>
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
            <span>价格</span>
          </li>
          <li>
            <span>销量</span>
          </li>
        </ul>
      </div>
      <div class="tab2">
        <ul>
          <li v-for="(val,key) in sea">
            <div class="pic">
              <a href=""><img :src="val.wz" width="265" height="265" alt=""></a>
            </div>
            <div class="pic1">
              <a href="">
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
              <span>加入购物车</span>
            </div>
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
import date from '../json/xq.js';
export default {
  data(){
    return {
      aaa:'',
      bbb:'',
      ccc:'',
      sear:'',
      searall:[],
      sea:[],
    }
  },
  created () {
    this.aaa = data.gj;
    this.bbb = data.lx;
    this.ccc = data.qt;
    this.searall = date.xq;
    this.getParams();

  },
  components: {
    Head,
    Botton,
    Yc
  },
  methods: {
      getParams () {
        // 取到路由带过来的参数 
        var routerParams = this.$route.query.search;
        console.log(routerParams);
        routerParams.forEach(e=>{

          for (let i = 0; i < this.searall.length; i++) {
            console.log(e)
            console.log(this.searall[i]);
            if(e == this.searall[i].bid){
              this.sea.push(this.searall[i]);
              console.log(1);
            }
          }
        })
        console.log(this.sea);
      }
  }
}
</script>

<style>

</style>
