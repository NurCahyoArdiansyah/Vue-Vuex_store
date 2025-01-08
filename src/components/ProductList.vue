<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["product"]),
  },
  methods: {
    ...mapActions(["getProduct", "addToCart"]),
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<template>
  <div>
    <div v-for="item in product" :key="item.id" class="product-item">
      <img src="../assets/img/laptop.jpg" :alt="item.title" width="150" />
      <h2>{{ item.title }}</h2>
      <p>Harga: Rp {{ item.price.toLocaleString() }}</p>
      <button @click="addToCart(item)">Tambah</button>
    </div>
  </div>
</template>

<style scoped>
.product-item {
  margin-bottom: 20px;
}
</style>
