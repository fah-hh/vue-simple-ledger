import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    data: []
  },

  getters: {
    ledger: (state) => state.data,
  },

  // เหมือน setter เอาไว้เปลี่ยนแปลงค่าใน state อารมณ์แบบ asign ค่า
  mutations: {
    fetch(state, { res }) {
      state.data = res.data
    },

    add(state, { payload }) {
      state.data.push(payload)
    },

  },

  // methods ให้ภายนอกเรียกใช้ หรือ ดึงข้อมูลจากภายนอกผ่าน api
  actions: {
    //commit เป็น Keyword ไว้เรียก mutation
    async fetchItem ({ commit }) {
      
      let res = await Axios.get('data.json')
      //เรียกมิวเทชั่น
      commit('fetch', { res })
    },

    addItem ({ commit }, payload) {
      // call api to add data
      commit('add', { payload })
    },
  },
  modules: {
  }
})
