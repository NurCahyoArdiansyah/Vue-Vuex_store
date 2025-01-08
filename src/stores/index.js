import { createStore } from "vuex";
import Product from "../mock/product.json";
import userTeacher from "./userTeacher";
import productTable from "./productTable";

const store = createStore({
  modules: {
    userTeacher,
    productTable,
  },
  state: {
    product: [],
    cart: [],
  },
  getters: {
    product(state) {
      return state.product;
    },
    cart(state) {
      return state.cart;
    },
  },
  mutations: {
    getProductData(state) {
      state.product = Product;
    },
    addItemToCart(state, item) {
      const addItemm = state.cart.find((product) => product.id === item.id);
      if (addItemm) {
        addItemm.qty++;
      } else {
        state.cart.push({ ...item, qty: 1 });
      }
    },
    addQty(state, id) {
      const currentItemm = state.cart.find((product) => product.id === id);
      currentItemm.qty++;
    },
    reduceQty(state, id) {
      const currentItemm = state.cart.find((product) => product.id === id);
      if (currentItemm.qty > 1) {
        currentItemm.qty--;
      } else {
        state.cart = state.cart.filter((product) => product.id !== id);
      }
    },
    closeItem(state, id) {
      state.cart = state.cart.filter((product) => product.id !== id);
    },
  },
  actions: {
    getProduct({ commit }) {
      commit("getProductData");
    },
    addToCart({ commit }, item) {
      commit("addItemToCart", item);
    },
    addQty({ commit }, id) {
      commit("addQty", id);
    },
    reduceQty({ commit }, id) {
      commit("reduceQty", id);
    },
    closeItem({ commit }, id) {
      commit("closeItem", id);
    },
  },
});

export default store;
