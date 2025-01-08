<script setup>
import Header from "./components/Header.vue";
import ProductList from "./components/ProductList.vue";
import Cart from "./components/Cart.vue";
import Teacher from "./components/Teacher.vue";
import ProductTable from "./components/ProductTable.vue";
</script>

<template>
  <Teacher />

  <ProductTable />
  <hr />

  <div>
    <ProductList />
    <hr />
    <Header />

    <Cart />
  </div>
</template>

<style scoped></style>
