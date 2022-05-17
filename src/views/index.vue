<template>
  <div class="index">
    <div>
      Y{{ time.year }} M{{ time.month }} W{{ time.week }}
      <el-button plain @click="reset_timer">重置时间</el-button>
    </div>
    <el-row :gutter="20">
      <el-col :span="6">
        <div class="index-left">
<!--          资产-->
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
<!--          属性-->
          <div>
            <div>属性</div>
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

<!--          底部状态框-->
          <div style="margin: 20px 0 20px 0">
            <el-progress :text-inside="true" :stroke-width="26" :percentage="action_percentage"></el-progress>
          </div>
        </div>
      </el-col>
      <el-col :span="12">
        <div class="index-center">
          <el-tabs v-model="activeTab" @tab-click="handleClickTab">
            <el-tab-pane label="角色" name="character">
              <el-button plain @click="send_leaflet">发传单</el-button>
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
      action_percentage:0,
      time:{
        year:0,
        month:1,
        week:1
      },
      timer:{}
    }
  },
  mounted() {
    this.init()
    this.time_change()
  },
  methods:{
    init(){
      this.statusData = this.$store.state.statusData
      this.attributeData = this.$store.state.attributeData
    },
    // 属性恢复函数
    recover_attribute(){
      let i = 0;
      let that = this
      let timer = setInterval(function(){
        if(i == 100) {
          that.time.month = i
          clearInterval(timer)
        }
        console.log(i)
        i++;
      },1000)
    },
    time_change(){
      let w = this.time.week;
      let m = this.time.month;
      let y = this.time.year;
      let that = this
      let timer = setInterval(function(){
        if(w > 4) {
          w = 1
          that.time.week = w
          m++
          if(m > 12){
            m = 1
            y++;
            that.time.month = m
            that.time.year = y
            console.log('12月');
          }else{
            that.time.month = m
          }
          w++
        }else{
          that.time.week = w
          w++;
        }
        // console.log(w,'w')
        // console.log(m,'m');
        // console.log(y,'y');

      },1000)
      this.timer = timer
    },
    reset_timer(){
      clearInterval(this.timer)
    },
    handleClickTab(tab, event) {
      console.log(tab, event);
    },
    // 发传单
    send_leaflet(){
      let i =0;
      let that = this
      let timer = setInterval(function(){
        if(i == 100) {
          that.action_percentage = i
          clearInterval(timer)
        }
        console.log(i)
        that.action_percentage = i
        i++;
      },1000)
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