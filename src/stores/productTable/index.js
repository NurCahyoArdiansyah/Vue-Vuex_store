import Product from "../../mock/product.json";

const state = {
  product: [],
};

const getters = {
  product(state) {
    return state.product;
  },
};

const mutations = {
  getProductData(state) {
    state.product = Product.map((item) => ({ ...item, jumlah: 0 }));
  },
  incrementJumlah(state, productId) {
    // Cari produk berdasarkan ID dan tingkatkan jumlahnya
    const product = state.product.find((item) => item.id === productId);
    if (product) {
      product.jumlah += 1;
    }
  },
};

const actions = {
  getProduct({ commit }) {
    commit("getProductData");
  },
  incrementJumlah({ commit }, productId) {
    commit("incrementJumlah", productId);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  getters,
  actions,
};
