<template>
    <div>
        <el-carousel :interval="4000" type="card" height="200px">
    <el-carousel-item v-for="(item,index) in banner" :key="index">
      <img :src="item.imageUrl">
    </el-carousel-item>
  </el-carousel>
    </div>
</template>

<script>
export default {
    data(){
        return{
banner:[]
        }
    },
    methods:{
            getsonglist(){
        this.$server
      .banner()
      .then(res => {
        this.banner = res.banners;
      })
      .catch(e => {
        console.log(e);
      });
  },
    },
    created() {
       this.getsonglist() 
    },
}
</script>
<style>
  .el-carousel__item h3 {
    color: #475669;
    font-size: 14px;
    opacity: 0.75;
    line-height: 200px;
    margin: 0;
  }
  
  .el-carousel__item:nth-child(2n) {
    background-color: #99a9bf;
  }
  
  .el-carousel__item:nth-child(2n+1) {
    background-color: #d3dce6;
  }
</style>