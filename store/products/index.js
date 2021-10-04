const state = {
  products: [],
}
const getters = {
  getAllProducts(state) {
    return state.products
  }
}

const mutations = {
  setProducts(state, payload) {
    state.products.push(payload);
  },
}

const actions = {
  nuxtServerInit(VuexContext, context) {
    return context.app.$axios.$get(`/api/product`).then((data) => {
      VuexContext.commit('setProducts', data);
    })
  }
}

export default {
  state,
  getters,
  mutations,
  actions,
}
