<template>
    <div class="manage">
      <div class="manage_block ali-c jus-c">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
          <el-form-item label="商家名称" prop="name">
            <el-input v-model="form.name" placeholder="请输入内容" ></el-input>
          </el-form-item>

          <el-form-item label="商家品牌" prop="brand">
            <el-input v-model="form.brand" placeholder="请输入内容" ></el-input>
          </el-form-item>

          <el-form-item label="商家地址" prop="space">
            <el-input v-model="form.space" placeholder="请输入内容" ></el-input>
          </el-form-item>

          <el-form-item label="商家电话" prop="phone">
            <el-input v-model="form.phone" placeholder="请输入内容" ></el-input>
          </el-form-item>

           <el-form-item label="商家排序" prop="weight">
            <el-input v-model="form.weight" placeholder="请输入内容" ></el-input>
          </el-form-item>

          <el-form-item label="商家图片" prop="img">
            <el-input v-model="form.img" placeholder="请输入内容" ></el-input>
          </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('form')">立即创建</el-button>
              <el-button @click="resetForm('form')">重置</el-button>
            </el-form-item>
        </el-form>

      </div>
    </div>
</template>

<script>
export default {
  data() {
    return {
      activeName: "1",
      currentPage4: 4,
      dialogFormVisible:false,
      form: {
          name: '',
          brand: '',
          phone: '',
          space: '',
          weight: '',
          img: ''
        },
        formLabelWidth: '120px',
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ],
          brand: [
            { required: true, message: '请输入品牌', trigger: 'change' }
          ],
          phone: [
            { required: true, message: '请输入电话', trigger: 'change' }
          ],
          space: [
            { required: true, message: '请输入产地', trigger: 'change' }
          ],
          weight: [
            { required: true, message: '请输入重量', trigger: 'blur' }
          ],
          img: [
            { required: true, message: '请输入图片', trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
    submitForm(formName) {
        this.$refs[formName].validate((valid) => {
          if (valid) {
            console.log('表单的全部数据', this.$refs[formName].model);
          } else {
            console.log('error submit!!');
            return false;
          }
        });
      },
      resetForm(formName) {
        this.$refs[formName].resetFields();
      }
    }
};
</script>
<style scoped>
.manage {
  background: white;
}
/* .manage_box{
    color:#1890ff
}
.manage_box span{
   margin: 0 5px;
   cursor: pointer;
} */
.manage_block {
  padding: 10px;
}
.el-table td, .el-table th{
  text-align: center;
}
</style>