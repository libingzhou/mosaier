<template>
  <el-carousel :interval="2000"  arrow="always" width="1120px"  height="450px" id="lunbo" class="lunbo">
    <el-carousel-item v-for="(val,key) in aaa" >
        <img :src="val" />
    </el-carousel-item>
  </el-carousel>
</template>
<script>
import date from '../json/lunbo.js'
export default {    
    data(){
        return {
            aaa:'',
        }
    },
    created () {
        this.aaa = date.data;
    }
}
</script>
<style>
#lunbo{
    text-align:center;
}
#lunbo img{
    margin-left: -200px;
}
</style>