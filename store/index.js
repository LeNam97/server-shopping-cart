import Vuex from 'vuex';
import products from './products/index';

const createStore = () => {
  // eslint-disable-next-line import/no-named-as-default-member
  return new Vuex.Store({
    modules: {
      products,
    }
  })
}
export default createStore;
