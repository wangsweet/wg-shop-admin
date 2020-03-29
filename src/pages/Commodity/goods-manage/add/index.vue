<template>
    <div class="manage">
      <div class="manage_block ali-c jus-c">
        <el-form :model="form" :rules="rules" ref="form" label-width="100px" class="demo-ruleForm">
          <el-form-item label="商品名称" prop="name">
            <el-input v-model="form.name" placeholder="请输入内容" ></el-input>
          </el-form-item>

          <el-form-item label="商品条码" prop="goodsSn">
            <el-input v-model="form.goodsSn" placeholder="请输入内容" ></el-input>
          </el-form-item>

          <el-form-item label="商品品牌" prop="brand">
            <el-input v-model="form.brand" placeholder="请输入内容" ></el-input>
          </el-form-item>

          <el-form-item label="商品类型" prop="type">
            <el-select v-model="form.type" placeholder="请选择活动区域">
              <el-option label="标品" value="1"></el-option>
              <el-option label="非标品" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="商品分类" prop="category">
            <el-select v-model="form.category" placeholder="请选择活动区域">
              <el-option label="生鲜" value="1"></el-option>
              <el-option label="常规" value="2"></el-option>
            </el-select>
          </el-form-item>

          <el-form-item label="商品产地" prop="space">
            <el-input v-model="form.space" placeholder="请输入内容" ></el-input>
          </el-form-item>

          <el-form-item label="商品规格" prop="sku">
            <el-input v-model="form.sku" placeholder="请输入内容" ></el-input>
          </el-form-item>

           <el-form-item label="商品重量" prop="weight">
            <el-input v-model="form.weight" placeholder="请输入内容" ></el-input>
          </el-form-item>

          <el-form-item label="商品图片" prop="img">
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
          goodsSn: '',
          brand: '',
          sku: '',
          space: '',
          type: '',
          category: '',
          weight: '',
          img: ''
        },
        formLabelWidth: '120px',
        rules: {
          name: [
            { required: true, message: '请输入名称', trigger: 'blur' }
          ],
          goodsSn: [
            { required: true, message: '请输入条码', trigger: 'change' }
          ],
          brand: [
            { required: true, message: '请输入品牌', trigger: 'change' }
          ],
          sku: [
            { required: true, message: '请输入规格', trigger: 'change' }
          ],
          space: [
            { required: true, message: '请输入产地', trigger: 'change' }
          ],
          type: [
            { required: true, message: '请选择类型', trigger: 'blur' }
          ],
          category: [
            { required: true, message: '请选择分类', trigger: 'blur' }
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