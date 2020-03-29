<template>
  <el-menu-item
    :index="list.path"
    v-if="!list.children"
    :class="$route.path==list.path?'is-active':''"
  >
    <i class="el-icon-s-tools"></i>
    <span slot="title">{{list.name}}</span>
  </el-menu-item>

  <el-submenu :index="list.path" v-else>
    <template slot="title">
      <i class="el-icon-location"></i>
      <span>{{list.name}}</span>
    </template>
    <menu-list :list="item" v-for="(item,index) in list.children" :key="index"></menu-list>
  </el-submenu>
</template>
<script>
export default {
  name: "MenuList",
  props: ["list",],
  data() {
    return {
      onelist: null
    };
  },
  created() {
  },
  methods: {}
};
</script>

<style scoped>

</style>