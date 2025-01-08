<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["cart"]),
    totalQty() {
      return this.cart.reduce((total, item) => total + item.qty, 0);
    },
  },
};
</script>

<template>
  <p>Cart ({{ totalQty }})</p>
</template>
