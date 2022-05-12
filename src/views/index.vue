<template>
  <div class="index">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="index-left">
          <div>
            <div>状态</div>
            <div class="user_status">
              <template>
                <el-table
                    :data="statusData"
                    style="width: 100%"
                    :show-header="false">
                  <el-table-column
                      prop="label"
                      width="50">
                  </el-table-column>
                  <el-table-column
                      prop="value"
                  >
                    <template slot-scope="scope">
                      <el-progress
                          type="line"
                          :stroke-width="15"
                          :percentage="scope.row.value"
                          :color="scope.row.color"
                      ></el-progress>
                    </template>
                  </el-table-column>
                </el-table>
              </template>

            </div>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="index-center">

        </div>
      </el-col>
      <el-col :span="6">
        <div class="index-right">

        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import "../style/normal.css"

export default {
  name: "index",
  data(){
    return{
      statusData:[
        {
          label:'健康',
          value:'70',
          color:'rgb(245,108,108)'
        },
        {
          label:'精力',
          value:'70',
          color:'rgb(64,158,255)'
        },
        {
          label:'心情',
          value:'70',
          color:'rgb(103,194,58)'
        }
      ]
    }
  },
  mounted() {

  },
  methods:{

  }
}
</script>

<style>
table th,
table td {
  border-bottom: none !important;
}
.el-table::before {
  height: 0px;
}
</style>