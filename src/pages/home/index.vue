<template>
  <div class="shouye">
    <el-row :gutter="20">
      <el-col :span="6" v-for="(item,index) in 8" :key="index">
        <div class="grid-content bg-purple shouye_box">
          <div class="jus-b ali-c shouye_box1">
            <span>订单</span>
            <span>急</span>
          </div>
          <div class="jus-b ali-c shouye_box2">
            <div class="ali-c flexv">
              <span>0</span>
              <span>待发货</span>
            </div>
            <div>0%</div>
          </div>
        </div>
      </el-col>
    </el-row>

<el-row>
  <el-col :span="24"><div class="grid-content bg-purple-dark">
    
    
    </div></el-col>
</el-row>
    
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>

<style  scoped>
.shouye_box {
  background: white;
  -moz-box-shadow: -1px 0px 20px #ededed;
  -webkit-box-shadow: -1px 0px 20px #ededed;
  box-shadow: -1px 0px 20px #ededed;
  margin-bottom: 10px;
}
.shouye_box1 {
  padding: 10px;
  border-bottom: 1px solid #ccc;
  border-top: 4px solid #e7eaec;
}
.shouye_box1 > span:nth-child(1) {
  font-size: 14px;
  font-weight: bold;
}
.shouye_box1 > span:nth-child(2) {
  font-size: 12px;
  padding: 2px 5px;
  background: #ed5565;
  color: white;
  border-radius: 3px;
}
.shouye_box2 {
  padding: 30px 10px;
}
.shouye_box2 > div:nth-child(1) > span:nth-child(1) {
  font-size: 30px;
  /* font-weight: bold; */
}
.shouye_box2 > div:nth-child(1) > span:nth-child(2) {
  font-size: 12px;
  /* margin-top:10px */
}
.shouye_box2 > div:nth-child(2) {
  font-size: 14px;
  color: #0092dc;
}
</style>
