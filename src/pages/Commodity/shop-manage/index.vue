<template>
  <div class>
    <div class="manage">
      <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
        <el-tab-pane label="营业中" name="1"></el-tab-pane>
        <el-tab-pane label="停业" name="2"></el-tab-pane>
      </el-tabs>
      <div>
        <el-table
          :data="tableData"
          style="width: 100%"
          :default-sort="{prop: 'date', order: 'descending'}"
        >
          <el-table-column prop="img" label="商品" width="200">
            <template slot-scope="scope">
              <div class="ali-c">
                <img :src="scope.row.image" min-width="70" height="70" />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
          <el-table-column prop="date" label="日期" sortable width="180"></el-table-column>
          <el-table-column prop="name" label="库存" sortable width="180"></el-table-column>
          <el-table-column prop="name" label="销量" sortable width="180"></el-table-column>
          <el-table-column prop="value" label="上架" width="180">
            <template slot-scope="scope">
              <div>
                <el-switch
                  v-model="scope.row.value"
                  active-color="#13ce66"
                  inactive-color="#ff4949"
                ></el-switch>
              </div>
            </template>
          </el-table-column>

          <!-- <el-table-column prop="address" label="地址" :formatter="formatter"></el-table-column> -->
          <el-table-column 
           label="操作"
           fixed="right"
            width="200">
            <template slot-scope="scope">
              <div class="manage_box">
                <el-button size="mini" type="primary" @click="jumpPath(scope.row)">编辑</el-button>
                <el-button size="mini" type="danger">删除</el-button>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <div class="manage_block ali-c jus-c">
        <!-- <span class="demonstration">完整功能</span> -->
        <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          :page-sizes="[100, 200, 300, 400]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="400"
        ></el-pagination>
      </div>
    </div>
    <el-dialog title="收货地址" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-form-item label="活动名称" :label-width="formLabelWidth">
          <el-input v-model="form.name" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="活动区域" :label-width="formLabelWidth">
          <el-select v-model="form.region" placeholder="请选择活动区域">
            <el-option label="区域一" value="shanghai"></el-option>
            <el-option label="区域二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogFormVisible = false">确 定</el-button>
      </div>
    </el-dialog>
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
          region: '',
          date1: '',
          date2: '',
          delivery: false,
          type: [],
          resource: '',
          desc: ''
        },
        formLabelWidth: '120px',
      tableData: [
        {
          id: 1,
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄",
          value: false,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583678192890&di=08baea4fbce5e80c5d2c834f386a0cff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907215510_Z8dws.thumb.700_0.jpeg"
        },
        {
          id: 2,
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄",
          value: false,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583678192890&di=08baea4fbce5e80c5d2c834f386a0cff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907215510_Z8dws.thumb.700_0.jpeg"
        },
        {
          id: 3,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          value: false,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583678192890&di=08baea4fbce5e80c5d2c834f386a0cff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907215510_Z8dws.thumb.700_0.jpeg"
        },
        {
          id: 4,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          value: false,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583678192890&di=08baea4fbce5e80c5d2c834f386a0cff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907215510_Z8dws.thumb.700_0.jpeg"
        },
        {
          id: 5,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          value: false,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583678192890&di=08baea4fbce5e80c5d2c834f386a0cff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907215510_Z8dws.thumb.700_0.jpeg"
        },
        {
          id: 6,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          value: false,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583678192890&di=08baea4fbce5e80c5d2c834f386a0cff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907215510_Z8dws.thumb.700_0.jpeg"
        },
        {
          id: 7,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          value: false,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583678192890&di=08baea4fbce5e80c5d2c834f386a0cff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907215510_Z8dws.thumb.700_0.jpeg"
        },
        {
          id: 8,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          value: false,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583678192890&di=08baea4fbce5e80c5d2c834f386a0cff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907215510_Z8dws.thumb.700_0.jpeg"
        },
        {
          id: 9,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          value: false,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583678192890&di=08baea4fbce5e80c5d2c834f386a0cff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907215510_Z8dws.thumb.700_0.jpeg"
        },
        {
          id: 10,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          value: false,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583678192890&di=08baea4fbce5e80c5d2c834f386a0cff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907215510_Z8dws.thumb.700_0.jpeg"
        }, 
        {
          id: 11,
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄",
          value: false,
          image:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583678192890&di=08baea4fbce5e80c5d2c834f386a0cff&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201409%2F07%2F20140907215510_Z8dws.thumb.700_0.jpeg"
        },
        
      ]
    };
  },
  methods: {
    handleClick(tab, event) {
      console.log(tab, event);
    },
    formatter(row, column) {
      return row.address;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    async jumpPath(data) {
      console.log(data)
      this.$router.push(`/index/shop-manage/detail/${ data.id }`)
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