<template>
  <div class="loginbox">
    <el-row>
      <el-col :span="12" :offset="6">
        <div class="login">
          <el-row slot="body" :gutter="0">
            <el-col :span="24" :xs="24" :sm="16" :md="16" :lg="16">
              <div class="login-form">
                <div class="card-block">
                  <h1>数据中台</h1>
                  <p class="text-muted">任意用户名/密码登录</p>
                  <div class="input-group m-b-1">
                    <span class="input-group-addon">
                      <i class="el-icon-s-custom"></i>
                    </span>
                    <input
                      type="text"
                      class="form-control"
                      placeholder="user name"
                      v-model="userInfo.username"
                    />
                  </div>
                  <div class="input-group m-b-2">
                    <span class="input-group-addon">
                      <i class="el-icon-unlock"></i>
                    </span>
                    <input
                      type="password"
                      class="form-control"
                      placeholder="password"
                      v-model="userInfo.password"
                      @keyup.enter="login"
                    />
                  </div>
                  <div class="row">
                    <el-row>
                      <el-col :span="12">
                        <el-button type="primary" class="btn btn-primary p-x-2" @click="login">登录</el-button>
                      </el-col>
                      <el-col :span="12">
                        <el-button
                          type="button"
                          class="btn btn-link forgot"
                          style="float:right;"
                        >忘记密码?</el-button>
                      </el-col>
                    </el-row>
                  </div>
                </div>
              </div>
            </el-col>
            <!-- <el-col :span="24" :xs="24" :sm="8" :md="8" :lg="8">
        <div class="login-register">
          <div class="card-block">
            <h2>注册</h2>
            <p>平台暂时只支持使用公司邮箱注册.</p>
            <el-button type="info" class="btn btn-primary active m-t-1"> 马上注册</el-button>
          </div>
        </div>
            </el-col>-->
          </el-row>
        </div>
      </el-col>
    </el-row>
  </div>
</template>
<script>
// import { index } from '@/utils/api';
export default {
  data() {
    return {
      // 响应的数据
      userInfo: {
        username: "",
        password: ""
      },
      // 校验的规则
      rules: {
        username: [{ required: true, message: "请输入用户名称" }],
        password: [
          { required: true, message: "请输入密码" },
          { type: "string", min: 6, message: "密码长度不能少于6位" }
        ]
      }
    };
  },
  created() {
    //   console.log(this.$store)
  },
  methods: {
    // 对整个表单进行校验
    login() {
      this.$store
        .dispatch("Login", this.userInfo)
        .then(res => {
          this.$router.push({ path: "/" });
          this.$message({
            message: "登录成功",
            type: "success"
          });
        })
        .catch(e => {});
    }
  }
};
</script>
<style scoped>
.loginbox {
  height:100vh;
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #670d10 0%, #092756 100%);
}
.login {
  margin-top: 160px;
  width: 100%;
  border: 1px solid #cfd8dc;
  margin-right: auto !important;
  margin-left: auto !important;
  display: table;
  table-layout: fixed;
  background-color: #20a8d8;
}

.login .el-button {
  border-radius: 0;
}

.login .el-button.forgot,
.login .el-button.forgot:hover {
  border: none;
}

.login .login-form {
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  display: block;
}

.login .login-form .card-block {
  padding: 35px;
}

.login .login-form .card-block p {
  margin: 15px 0;
}

.input-group {
  width: 100%;
  display: table;
  border-collapse: separate;
  margin-bottom: 20px !important;
}

.input-group,
.input-group-btn,
.input-group-btn > .btn,
.navbar {
  position: relative;
}

.input-group-addon:not(:last-child) {
  border-right: 0;
}

.input-group-addon,
.input-group-btn {
  min-width: 40px;
  white-space: nowrap;
  vertical-align: middle;
  width: 1%;
}

.btn-link:focus,
.btn-link:hover {
  color: #167495;
  text-decoration: underline;
  background-color: transparent;
}

.btn-link,
.btn-link:active,
.btn-link:focus,
.btn-link:hover {
  border-color: transparent;
}

.btn.focus,
.btn:focus,
.btn:hover {
  text-decoration: none;
}

.input-group-addon {
  padding: 25px 37.5px;
  margin-bottom: 0;
  font-size: 20px;
  font-weight: 400;
  line-height: 20px;
  color: #607d8b;
  text-align: center;
  background-color: #cfd8dc;
  border: 1px solid rgba(0, 0, 0, 0.15);
}

.input-group .form-control,
.input-group-addon,
.input-group-btn {
  display: table-cell;
}

.input-group .form-control {
  position: relative;
  z-index: 2;
  float: left;
  margin-bottom: 0;
}

.form-control {
  width: 90%;
  padding: 20px 15px;
  font-size: 20px;
  line-height: 20px;
  color: #607d8b;
  background: #fff none;
  background-clip: padding-box;
  border: 1px solid rgba(0, 0, 0, 0.15);
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
}

.login .login-form .card-block .row {
  display: block;
  margin: 15px 0;
}

.login .login-register {
  width: 100%;
  height: 100%;
  display: block;
  background-color: #20a8d8;
  color: #fff;
}

.login .login-register .card-block {
  text-align: center !important;
  padding: 30px;
}

.login .login-register .card-block p {
  text-align: left !important;
  margin: 15px 0;
  height: 100px;
}
</style>