<script>
import { mapGetters, mapActions } from "vuex";

export default {
  computed: {
    ...mapGetters(["cart"]),

    // totalPageCoputed() {
    //   return 0;
    // },
  },
  methods: {
    ...mapActions(["reduceQty", "addQty", "closeItem"]),
  },
};
</script>

<template>
  <ul>
    <li v-for="item in cart" :key="item.id">
      <button @click="closeItem(item.id)">x</button>
      <img src="../assets/img/laptop.jpg" :alt="item.title" width="150px" />
      <h5>{{ item.title }}</h5>
      <p>
        <button @click="reduceQty(item.id)">-</button>
        {{ item.qty }}
        <button @click="addQty(item.id)">+</button>
      </p>
    </li>
  </ul>
</template>

<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}
li {
  margin-bottom: 20px;
}
</style>
