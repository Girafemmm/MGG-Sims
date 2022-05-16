import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    statusData:[
      {
        label:'现金',
        value:'10000',
      }
    ],
    attributeData:[
      {
        label:'健康',
        value: 70,
        color:'rgb(245,108,108)'
      },
      {
        label:'精力',
        value: 70,
        color:'rgb(64,158,255)'
      },
      {
        label:'心情',
        value: 70,
        color:'rgb(103,194,58)'
      }
    ]
  },
  mutations: {

  },

})

export default store