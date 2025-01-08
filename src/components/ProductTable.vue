<script>
import { mapActions, mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters("productTable", ["product"]),
  },
  methods: {
    ...mapActions("productTable", ["getProduct", "incrementJumlah"]),
    increaseJumlah(productId) {
      this.incrementJumlah(productId);
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>

<template>
  <div>
    <table border="1">
      <thead>
        <tr>
          <th>Nama</th>
          <th>Harga</th>
          <th>Gambar</th>
          <th>Jumlah</th>
          <th>Aksi</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="item in product" :key="item.id">
          <td>{{ item.title }}</td>
          <td>{{ item.price }}</td>
          <td>
            <img
              src="../assets/img/laptop.jpg"
              alt="Gambar Produk"
              width="60"
            />
          </td>
          <td>{{ item.jumlah }}</td>
          <td>
            <button @click="increaseJumlah(item.id)">+</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
