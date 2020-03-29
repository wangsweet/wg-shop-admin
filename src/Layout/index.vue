
<template>
  <el-container class="home_container">
    <el-aside :class="isCollapse?'isCollapse':'Collapse'">
        <Logo/>
      <el-menu
        class="el-menu-vertical-demo"
        router
        background-color="rgb(48, 65, 86)"
        text-color="rgb(191, 203, 217)"
        :collapse="isCollapse"
        mode="vertical"
        :unique-opened="true"
        :default-active="currentMenu"
      >
        <Menu :list="item" v-for="(item,index) in menu" :key="index"></Menu>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style=" ;font-size: 12px" class="jus-b ali-c flexv">
        <Head></Head>  
      </el-header>
      <Tags></Tags>
      <el-main>
        <el-collapse-transition>
       
          <el-scrollbar style="height:100%">
        <keep-alive> <router-view /> </keep-alive>
        </el-scrollbar >
       
          </el-collapse-transition>
      </el-main>
    </el-container>
  </el-container>
</template>
<style scoped>
.el-header {
  background-color: #fff;
  height:60px;
   border-bottom: 1px solid #e5e5e5;
    position: relative
}

.el-aside {
  color: #333;
  background-color: rgb(48, 65, 86);
}
.el-aside .el-menu {
  border-right: 0;
}

.home_container {
  height: 100vh;
}

.isCollapse{
  width: 64px!important;
   -webkit-transition: all 0.5s;
  transition: all 0.5s;

}
.Collapse{
  width: 200px!important;
  -webkit-transition: all 0.5s;
  transition: all 0.5s;
}
.el-main{
   background: #f8f8f8;
}

</style>
<style>
 .el-scrollbar__wrap {
  overflow-x: hidden!important;
}
</style>
<script>
import { mapGetters } from "vuex";
import Menu from "../components/menu";
import Head from "../components/head";
import Tags from "../components/Tags";
import Logo from "../components/logo";
export default {
  components: {
    Menu,
    Head,
    Tags,
    Logo
  },
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄"
    };
    return {
      tableData: Array(20).fill(item),
     

    };
  },
  computed: {
    ...mapGetters(["newrouter","isCollapse","menu","currentMenu"])
  },
  created() {
  }
};
</script>


