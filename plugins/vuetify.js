import Vue from 'vue'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'

Vue.use(Vuetify)

const opts = {
  iconfont: 'mdi',
  theme:{
    primary: '#9652ff',
    success: '#3cd1c2',
  }
}

export default new Vuetify(opts)
