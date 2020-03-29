<template>
  <div class="ali-c jus-b" style="width:100%;height:100%">
    <div class="ali-c jus-b">
      <span class="ali-c jus-c">
        <i
          @click="setiscollapse()"
          :class="isCollapse?'el-icon-s-unfold':'el-icon-s-fold'"
          style=" font-size:25px;margin-right:20px"
        ></i>
      </span>
      <!-- <div>
        <el-breadcrumb separator="/">
          <transition-group name="breadcrumb">
            <template v-for="(route,i) in crumbList">
              <el-breadcrumb-item
                :key="route.name"
                v-if="route.name!='index'"
                :class="{'is-last-link':i==crumbList.length-1}"
              >{{route.name}}</el-breadcrumb-item>
            </template>
          </transition-group>
        </el-breadcrumb>
      </div> -->
    </div>
    <ul class="el-dropdown-link ali-c flex">
      <!-- 全屏显示 -->
      <li class="btn-fullscreen" @click="handleFullScreen">
        <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
          <i class="el-icon-rank"></i>
        </el-tooltip>
      </li>

      <li class>
        <el-dropdown trigger="click" placement="top">
          <span class="el-dropdown-link ali-c jus-c">
            <img
              src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
              style="cursor: pointer;
    width: 40px;
    height: 40px;
    border-radius: 10px"
              alt="U"
            />
            <!-- <span>路霸</span> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>个人中心</el-dropdown-item>
            <el-dropdown-item @click.native="loginout">退出</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </li>
    </ul>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fullscreen: false
    };
  },
  methods: {
    setiscollapse() {
      this.$store.dispatch("changeisCollapse");
    },
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    },
    loginout() {
      this.$store
        .dispatch("Loginout")
        .then(() => {
          this.$message({
            type: "success",
            message: "退出成功"
          });
          this.$router.push("/login");
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  computed: {
    ...mapGetters(["isCollapse", "crumbList"])
  }
};
</script>
<style scoped>
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.el-dropdown-link li {
  padding: 0 10px;
}
.breadcrumb-enter,
.breadcrumb-leave-active {
  opacity: 0;
  transform: translateX(20px);
}

.breadcrumb-enter-active,
.breadcrumb-leave-active {
  transition: all 0.6s;
}

.breadcrumb-leave-active {
  position: absolute;
}
</style>