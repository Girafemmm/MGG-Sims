<template>
  <div class="index">
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="index-left">
          <div>
            <div>资产</div>
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
              </el-table-column>
            </el-table>
          </div>
          <div>
            <div>状态</div>
            <div class="user_status">
              <template>
                <el-table
                    :data="attributeData"
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
          <el-tabs v-model="activeTab" @tab-click="handleClickTab">
            <el-tab-pane label="角色" name="character">
              <el-button plain>发传单</el-button>
            </el-tab-pane>
            <el-tab-pane label="学习" name="study">
              <el-button plain>数学</el-button>
              <el-button plain>文学</el-button>
              <el-button plain>美术</el-button>
              <el-button plain>音乐</el-button>
              <el-button plain>计算机</el-button>
              <el-button plain>金融</el-button>
            </el-tab-pane>
            <el-tab-pane label="商店" name="shop">
              商店
            </el-tab-pane>
            <el-tab-pane label="设置" name="setting">
              设置
            </el-tab-pane>
          </el-tabs>
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
      statusData:[],
      attributeData:[],
      activeTab:'character',

    }
  },
  mounted() {
    this.init()
  },
  methods:{
    init(){
      this.statusData = this.$store.state.statusData
      this.attributeData = this.$store.state.attributeData
    },
    handleClickTab(tab, event) {
      console.log(tab, event);
    }
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